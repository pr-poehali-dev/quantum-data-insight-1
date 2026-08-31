<?php
/**
 * Приём заявок с формы сайта Anzler и отправка письма на sales1@anzler.ru
 * через почтовый ящик anzler.noreply@yandex.ru (Яндекс.Почта SMTP).
 *
 * Требования хостинга: PHP 7.4+ с включённой функцией fsockopen
 * (на обычном хостинге reg.ru она разрешена).
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// ==== Настройки почты. Заполните и не публикуйте эти данные никому. ====
$smtpHost = 'smtp.yandex.ru';
$smtpPort = 465;
$smtpUser = 'anzler.noreply@yandex.ru';
$smtpPassword = 'lcvafatwfdrjpqdf'; // пароль приложения Яндекс.Почты, не обычный пароль
$toEmail = 'sales1@anzler.ru';
// ========================================================================

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Некорректные данные']);
    exit;
}

$name = trim($data['name'] ?? '');
$contact = trim($data['contact'] ?? ($data['phone'] ?? ''));
$message = trim($data['message'] ?? '');
$consentGiven = !empty($data['consent_given']);
$consentGivenAt = trim($data['consent_given_at'] ?? '');
$marketingConsentGiven = !empty($data['marketing_consent_given']);
$marketingConsentGivenAt = trim($data['marketing_consent_given_at'] ?? '');

if ($name === '' || $contact === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Укажите имя и контакт']);
    exit;
}

if (!$consentGiven || $consentGivenAt === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Требуется согласие на обработку персональных данных']);
    exit;
}

$subject = 'Новая заявка с сайта Anzler';
$body = "Новая заявка с сайта Anzler\n\n"
    . "Имя: {$name}\n"
    . "Контакт: {$contact}\n"
    . "Сообщение: " . ($message !== '' ? $message : '-') . "\n"
    . "Согласие на обработку ПДн: {$consentGivenAt}\n"
    . "Согласие на рекламную рассылку: " . ($marketingConsentGiven ? $marketingConsentGivenAt : 'не дано') . "\n"
    . "Дата заявки: " . date('Y-m-d H:i:s');

list($sent, $error) = smtp_send_mail($smtpHost, $smtpPort, $smtpUser, $smtpPassword, $toEmail, $subject, $body);

error_log("[send_form] name={$name} contact={$contact} consent_at={$consentGivenAt} email_sent=" . ($sent ? '1' : '0') . " error=" . ($error ?: '-'));

if (!$sent) {
    http_response_code(200);
    echo json_encode(['success' => false, 'email_sent' => false, 'email_error' => $error]);
    exit;
}

echo json_encode(['success' => true, 'email_sent' => true]);


/**
 * Простая отправка письма через SMTP c SSL (порт 465) без внешних библиотек.
 * Возвращает [bool $success, string|null $error].
 */
function smtp_send_mail(string $host, int $port, string $user, string $password, string $to, string $subject, string $body): array
{
    $timeout = 10;
    $socket = @fsockopen('ssl://' . $host, $port, $errno, $errstr, $timeout);
    if (!$socket) {
        return [false, "Connect error: {$errstr} ({$errno})"];
    }
    stream_set_timeout($socket, $timeout);

    $read = function () use ($socket) {
        $data = '';
        while ($line = fgets($socket, 515)) {
            $data .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        return $data;
    };

    $write = function ($cmd) use ($socket) {
        fwrite($socket, $cmd . "\r\n");
    };

    $read();
    $write('EHLO anzler.ru');
    $read();
    $write('AUTH LOGIN');
    $read();
    $write(base64_encode($user));
    $read();
    $write(base64_encode($password));
    $authResp = $read();
    if (strpos($authResp, '235') !== 0 && strpos($authResp, '235') === false) {
        fclose($socket);
        return [false, 'SMTP auth failed: ' . trim($authResp)];
    }

    $write('MAIL FROM:<' . $user . '>');
    $read();
    $write('RCPT TO:<' . $to . '>');
    $read();
    $write('DATA');
    $read();

    $headers = "From: Anzler <{$user}>\r\n";
    $headers .= "To: <{$to}>\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: base64\r\n";

    $encodedBody = chunk_split(base64_encode($body));

    $write($headers . "\r\n" . $encodedBody . "\r\n.");
    $dataResp = $read();

    $write('QUIT');
    fclose($socket);

    if (strpos($dataResp, '250') === 0) {
        return [true, null];
    }

    return [false, 'SMTP send failed: ' . trim($dataResp)];
}
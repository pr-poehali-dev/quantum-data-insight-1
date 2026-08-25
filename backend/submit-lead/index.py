import json
import os
import smtplib
import urllib.request
import urllib.parse
from email.mime.text import MIMEText
import psycopg2


def handler(event: dict, context) -> dict:
    '''Принимает заявку с сайта, сохраняет в БД и отправляет уведомление менеджерам на email и в Telegram'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }

    body = json.loads(event.get('body') or '{}')
    name = (body.get('name') or '').strip()
    contact = (body.get('contact') or body.get('phone') or '').strip()
    message = (body.get('message') or '').strip()

    if not name or not contact:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Укажите имя и контакт'})
        }

    dsn = os.environ['DATABASE_URL']
    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')

    conn = psycopg2.connect(dsn)
    conn.autocommit = True
    cur = conn.cursor()
    cur.execute(
        f"INSERT INTO {schema}.leads (name, contact, message) VALUES (%s, %s, %s) RETURNING id",
        (name, contact, message)
    )
    lead_id = cur.fetchone()[0]

    email_sent, email_error = send_email(name, contact, message)
    telegram_sent, telegram_error = send_telegram(name, contact, message)

    cur.execute(
        f"UPDATE {schema}.leads SET email_sent = %s, telegram_sent = %s WHERE id = %s",
        (email_sent, telegram_sent, lead_id)
    )

    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
        'body': json.dumps({
            'success': True,
            'id': lead_id,
            'email_sent': email_sent,
            'telegram_sent': telegram_sent,
            'email_error': email_error,
            'telegram_error': telegram_error,
        })
    }


def send_email(name: str, contact: str, message: str):
    host = os.environ.get('SMTP_HOST')
    port = os.environ.get('SMTP_PORT')
    user = os.environ.get('SMTP_USER')
    password = os.environ.get('SMTP_PASSWORD')
    to_email = 'sales1@anzler.ru'

    if not all([host, port, user, password]):
        return False, 'no_smtp_config'

    text = f"Новая заявка с сайта Anzler\n\nИмя: {name}\nКонтакт: {contact}\nСообщение: {message or '-'}"
    msg = MIMEText(text, _charset='utf-8')
    msg['Subject'] = 'Новая заявка с сайта Anzler'
    msg['From'] = user
    msg['To'] = to_email

    try:
        with smtplib.SMTP_SSL(host, int(port), timeout=3) as server:
            server.login(user, password)
            server.sendmail(user, [to_email], msg.as_string())
        return True, None
    except Exception as e:
        return False, f'{type(e).__name__}: {e}'


def send_telegram(name: str, contact: str, message: str):
    token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')

    if not token or not chat_id:
        return False, 'no_telegram_config'

    text = f"🔔 Новая заявка с сайта Anzler\n\n👤 Имя: {name}\n📞 Контакт: {contact}\n💬 Сообщение: {message or '-'}"
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    data = urllib.parse.urlencode({'chat_id': chat_id, 'text': text}).encode()

    try:
        req = urllib.request.Request(url, data=data)
        with urllib.request.urlopen(req, timeout=3) as resp:
            body = resp.read().decode()
            return resp.status == 200, body
    except urllib.error.HTTPError as e:
        return False, f'HTTP {e.code}: {e.read().decode()}'
    except Exception as e:
        return False, f'{type(e).__name__}: {e}'
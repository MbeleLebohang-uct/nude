import http.client
import hashlib
import hmac
import os
import json

# curl -X PUT 'http://localhost:54321/auth/v1/user' \
# -H "apikey: SUPABASE_KEY" \
# -H "Authorization: Bearer <SUPABASE_SERVICE_ROLE_KEY>" \
# -H "Content-Type: application/json" \
# -d '{
#   "email": "someone@email.com",
#   "data": {
#     "policyholder": body["policyholder"]
#   }
# }'


def get_response(code, body):
  return {
    'statusCode': code,
    'headers': {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    'body': body,
    "isBase64Encoded": False
  }

def verify_webhook_request(body, signature, secret):
  secret = bytes(secret, 'UTF-8')
  body = bytes(body, 'UTF-8')
  
  digester = hmac.new(secret, body, hashlib.sha1)
  digest = digester.hexdigest()
  
  return signature == digest

def handler(event, context):
  status_code = 200

  # Handle on policy issued webhook
  print('---------On policyholder created!----------')

  secret = os.getenv('ROOT_WEBHOOK_SECRET')
  verified = verify_webhook_request(body=event["body"], signature=event["headers"]["X-Hook-Signature"], secret=secret)
  if not verified:
    return get_response(401, 'Invalid webhook signature')
  
  body = json.loads(event["body"])
  
  data = {
    "email": body["policyholder"]["id"]["number"],
    "data": {
      "policyholder": body["policyholder"]
    }
  }

  connection = http.client.HTTPConnection(os.getenv('PLATFORM_SUPABASE_URL'))
  connection.request(
    'PUT', 
    '/auth/v1/user', 
    body=json.dumps(data), 
    headers={
      'apikey': os.getenv('PLATFORM_SUPABASE_ANON_KEY'),
      'Authorization': f"Bearer {os.getenv('PLATFORM_SUPABASE_SERVICE_ROLE_KEY')}",
      'Content-Type': 'application/json'
    }
  )
  response = connection.getresponse()

  results = {
    'environment': os.getenv('ENVIRONMENT'),
    'body': response.read().decode('utf-8'),
    'message': 'Webhook handled!',
  }
  
  return get_response(response.status, json.dumps(results))
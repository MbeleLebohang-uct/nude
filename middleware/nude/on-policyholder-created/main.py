import base64
import hashlib
import hmac
import os
import json

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
  
  results = {
    'environment': os.getenv('ENVIRONMENT'),
    'secret': secret,
    'message': 'Successfuly handled!',
    'body': event["body"],
    'headers': event["headers"]
  }

  
  return get_response(status_code, json.dumps(results))
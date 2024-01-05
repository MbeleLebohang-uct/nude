import os
import base64
import json
import requests


def handler(event, context):
  status_code = 200

  # Handle on policy issued webhook
  print('---------On policy cancelled!----------')

  response = requests.request(
    "GET", 
    f"https://{os.getenv('ENVIRONMENT')}.root.co.za/v1/insurance/policyholders?id_number=back@future.com", 
    headers={
      'Content-Type': 'application/json',
      'Authorization': f"Basic {base64.b64encode(os.getenv('ROOT_API_KEY').encode()).decode()}"
    }
  )

  results = {
    'environment': os.getenv('ENVIRONMENT'),
    'message': 'Successfuly handled!',
    'results': response.json()
  }

  print(results)

  return {
    'statusCode': status_code,
    'headers': {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    'body': json.dumps(results),
    "isBase64Encoded": False
  }
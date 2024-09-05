import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('VisitorCount')

def handler(event, context):
    # Get the current visitor count
    response = table.get_item(Key={
        'id': '1'
    })
    
    # Retrieve the current view count
    views = response['Item']['views']
    
    # Increment the view count
    views = views + 1
    
    # Print the new view count (for debugging)
    print(views)
    
    # Update the item in DynamoDB with the new view count
    response = table.put_item(Item={
        'id': '1',
        'views': views
    })
    
    # Return the updated view count
    return views

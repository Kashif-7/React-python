# from flask_mongoengine import Document
# from mongoengine import StringField, DateTimeField, BooleanField, ListField, ReferenceField
# import datetime


# class User(Document):
#     username = StringField(required=True, unique=True)
#     email = StringField(required=True, unique=True)
#     password = StringField(required=True)
#     created_at = DateTimeField(default=datetime.datetime.utcnow)
    
from mongoengine import Document, StringField, DateTimeField
import datetime

class User(Document):
    username = StringField(required=True, unique=True)
    email = StringField(required=True, unique=True)
    password = StringField(required=True)
    created_at = DateTimeField(default=datetime.datetime.utcnow)

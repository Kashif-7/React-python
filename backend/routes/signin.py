# from models.user import User
# from flask import Blueprint
# from flask import *

# signin = Blueprint('signin', __name__)


# @signin.route('/signin', methods =['POST'])
# def sign_in_user():
#     if request.method == 'OPTIONS':
#         # Handle preflight request
#         return '', 200

#     try:
#         # Get the data from the request
#         data = request.get_json()
#         username = data.get('username')
#         password = data.get('password')

#         # Check if the user exists
#         existing_user = User.objects(username=username).first()

#         if not existing_user:
#             return {
#                 "success": False,
#                 "message": "User does not exist",
#             }, 400

#         # Check if the password is correct
#         if existing_user.password != password:
#             return {
#                 "success": False,
#                 "message": "Incorrect password",
#             }, 400

#         return {
#             "success": True,
#             "message": "User signed in successfully",
#             "user": {
#                 "username": existing_user.username,
#                 "email": existing_user.email
#             }
#         }, 200

#     except Exception as e:
#         return {
#             "success": False,
#             "message": "Failed to sign in the user",
#             "error": str(e)
#         }, 500
from flask import Blueprint, request
from models.user import User
from flask import *

signin = Blueprint('signin', __name__)

@signin.route('/signin', methods=['POST'])
def sign_in_user():
    if request.method == 'OPTIONS':
        return '', 200

    try:
        data = request.get_json()
        email_or_username = data.get('email')  # Expect email from frontend
        password = data.get('password')

        if not email_or_username or not password:
            return {
                "success": False,
                "message": "Email or password not provided",
            }, 400

        # Check user by email or username (case insensitive)
        existing_user = User.objects(email=email_or_username.lower()).first() or \
                        User.objects(username=email_or_username.lower()).first()

        if not existing_user:
            return {
                "success": False,
                "message": "User does not exist",
            }, 400

        if existing_user.password != password:
            return {
                "success": False,
                "message": "Incorrect password",
            }, 400

        return {
            "success": True,
            "message": "User signed in successfully",
            "user": {
                "username": existing_user.username,
                "email": existing_user.email
            }
        }, 200

    except Exception as e:
        return {
            "success": False,
            "message": "Failed to sign in the user",
            "error": str(e)
        }, 500


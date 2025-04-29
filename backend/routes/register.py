from models.user import User
from flask import Blueprint, request


register = Blueprint('register', __name__)


@register.route('/register', methods=['POST'])

def reg_user():
    if request.method == 'OPTIONS':
        # Handle preflight request
        return '', 200
    
    try:
        # Get the data from the request
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        # Check if the user already exists
        existing_user = User.objects(username=username).first()

        if existing_user:
            return {
                "success": False,
                "message": "User already exists",
                "user": [{
                    "username": existing_user.username,
                    "email": existing_user.email
                }]
            }, 400

        # Create a new user
        user = User(username=username, email=email, password=password)
        user.save()

        return {
            "success": True,
            "message": "User registered successfully",
            "user": {
                "username": user.username,
                "email": user.email
            }
        }, 200

    except Exception as e:
        return {
            "success": False,
            "message": "Failed to register the user",
            "error": str(e)
        }, 500

from flask import Flask
from flask_cors import CORS
from mongoengine import connect
from dotenv import load_dotenv
import os

from models.user import User

from routes.register import register
from routes.signin import signin

# Load .env variables
load_dotenv()

# Flask app setup
app = Flask(__name__)
# CORS(app)
# CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)

# MongoDB connection (using mongoengine directly)
MONGODB_URI = os.getenv("MONGODB_URI")

if not MONGODB_URI:
    raise Exception("MONGODB_URI is missing in .env file")

connect(db="real_estate",host=MONGODB_URI)

# Register routes

app.register_blueprint(register, url_prefix='/api')
app.register_blueprint(signin , url_prefix='/api')

# Run app
if __name__ == '__main__':
    app.run(debug=True)

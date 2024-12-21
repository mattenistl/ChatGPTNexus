import os
import psycopg2
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Load environment variables
DATABASE_URL = os.getenv('DATABASE_URL', 'postgresql://postgres:V7WdTP5!CFegvnY@localhost:5432/postgres')

SSL_MODE = os.getenv('SSL_MODE', 'disable')  # Default to disable SSL for local development

def get_db_connection():
    return psycopg2.connect(DATABASE_URL, sslmode=SSL_MODE)

@app.route('/')
def home():
    conn = get_db_connection()
    return "Connected to the database successfully!"

@app.route('/test-endpoint')
def test_endpoint():
    return jsonify({"message": "Hello from the backend!"})

if __name__ == '__main__':
    app.run(debug=True)

import os
import psycopg2
from flask import Flask

app = Flask(__name__)

# Load environment variables
DATABASE_URL = os.getenv('DATABASE_URL')  # Supabase connection string
SSL_MODE = os.getenv('SSL_MODE', 'require')  # Default to requiring SSL

def get_db_connection():
    return psycopg2.connect(DATABASE_URL, sslmode=SSL_MODE)

@app.route('/')
def home():
    conn = get_db_connection()
    return "Connected to the database with SSL!"

'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './page.module.css';

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from the Flask backend
    axios
      .get('http://127.0.0.1:5000/api/hello') // Replace with your backend URL if different
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setMessage('Failed to load data');
      });
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to FounderSmarter!</h1>
        <p>{message || 'Loading...'}</p>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read Docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Powered by Next.js and Flask</p>
      </footer>
    </div>
  );
}

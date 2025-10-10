// client/screens/ErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div style={styles.container}>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Return to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  link: {
    marginTop: '1rem',
    display: 'inline-block',
    textDecoration: 'none',
    color: '#3498db',
    fontWeight: 'bold',
  },
};

// client/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      <Link to="/send" style={styles.link}>Send</Link>
      <Link to="/receive" style={styles.link}>Receive</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem',
    backgroundColor: '#eee',
    borderBottom: '1px solid #ccc',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
};

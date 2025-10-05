// client/screens/Home.js
import React from 'react';
import logo from '../assets/PeoplePayLogo.jpg';

export default function Home() {
  return (
    <div style={styles.container}>
      <img src={logo} alt="PeoplePay logo" style={styles.logo} />
      <h1 style={styles.heading}>Welcome to PeoplePay</h1>
      <p style={styles.subtext}>Send and receive money with trust, speed, and community power.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  },
  logo: {
    maxWidth: '180px',
    height: 'auto',
    marginBottom: '1rem',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subtext: {
    fontSize: '1rem',
    color: '#555',
  },
};

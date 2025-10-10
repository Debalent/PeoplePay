// client/screens/UserProfile.js
import React from 'react';

export default function UserProfile() {
  const user = {
    name: 'Demond Balentine',
    email: 'demond@example.com',
    role: 'Parent', // Later: dynamic from auth or backend
  };

  return (
    <div style={styles.container}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
  },
};

// client/components/ThemeToggle.js
import React, { useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? '#fff' : '#222';
    document.body.style.color = darkMode ? '#000' : '#eee';
  };

  return (
    <div style={styles.container}>
      <h2>Theme Settings</h2>
      <button onClick={toggleTheme} style={styles.button}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#34495e',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

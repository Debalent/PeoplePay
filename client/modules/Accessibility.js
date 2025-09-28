// client/modules/Accessibility.js
import React, { useState } from 'react';

export default function Accessibility() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const handleSave = () => {
    console.log(`Accessibility settings: Reduce motion = ${reduceMotion}, High contrast = ${highContrast}`);
    // Later: persist to user profile or local storage
  };

  return (
    <div style={styles.container} role="region" aria-label="Accessibility Settings">
      <h2>Accessibility Settings</h2>
      <label style={styles.label}>
        <input
          type="checkbox"
          checked={reduceMotion}
          onChange={() => setReduceMotion(!reduceMotion)}
        />
        Reduce motion effects
      </label>
      <label style={styles.label}>
        <input
          type="checkbox"
          checked={highContrast}
          onChange={() => setHighContrast(!highContrast)}
        />
        Enable high contrast mode
      </label>
      <button onClick={handleSave} style={styles.button}>Save Preferences</button>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '400px',
    margin: '0 auto',
  },
  label: {
    display: 'block',
    marginBottom: '1rem',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#9b59b6',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

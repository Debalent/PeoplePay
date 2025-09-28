// client/screens/ParentalControls.js
import React, { useState } from 'react';

export default function ParentalControls() {
  const [limit, setLimit] = useState('');
  const [approvalRequired, setApprovalRequired] = useState(false);

  const handleSave = () => {
    console.log(`Spend limit: $${limit}, Approval required: ${approvalRequired}`);
    // Later: save to user profile or backend
  };

  return (
    <div style={styles.container}>
      <h2>Parental Controls</h2>
      <input
        type="number"
        placeholder="Daily spend limit"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        style={styles.input}
      />
      <label style={styles.label}>
        <input
          type="checkbox"
          checked={approvalRequired}
          onChange={() => setApprovalRequired(!approvalRequired)}
        />
        Require approval for transactions
      </label>
      <button onClick={handleSave} style={styles.button}>Save Settings</button>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    display: 'block',
    width: '100%',
    marginBottom: '1rem',
    padding: '0.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '1rem',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#e67e22',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

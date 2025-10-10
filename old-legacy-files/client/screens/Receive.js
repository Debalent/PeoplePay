// client/screens/Receive.js
import React, { useState } from 'react';

export default function Receive() {
  const [from, setFrom] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const handleRequest = () => {
    console.log(`Requesting $${amount} from ${from}: ${note}`);
    // Later: trigger backend or blockchain logic
  };

  return (
    <div style={styles.container}>
      <h2>Receive Money</h2>
      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={styles.input}
      />
      <textarea
        placeholder="Note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={styles.textarea}
      />
      <button onClick={handleRequest} style={styles.button}>Request</button>
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
  textarea: {
    display: 'block',
    width: '100%',
    marginBottom: '1rem',
    padding: '0.5rem',
    height: '80px',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

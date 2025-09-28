// client/components/TransactionCard.js
import React from 'react';

export default function TransactionCard({ transaction }) {
  const { type, to, from, amount, date } = transaction;

  return (
    <div style={styles.card}>
      <p><strong>{type}</strong> {type === 'Sent' ? `to ${to}` : `from ${from}`}</p>
      <p>Amount: ${amount.toFixed(2)}</p>
      <p>Date: {date}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#f9f9f9',
  },
};

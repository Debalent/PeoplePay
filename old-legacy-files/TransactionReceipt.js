// TransactionReceipt.js
// Developer Note: This file displays confirmation details for a completed transaction.
// Designed for clarity, trust, and future expansion into export, sharing, or branded overlays.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionReceipt = ({ receipt }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction Receipt</Text>

      {/* Receipt Details */}
      <Text style={styles.detail}>To: {receipt.recipient}</Text>
      <Text style={styles.detail}>Amount: ${receipt.amount}</Text>
      <Text style={styles.detail}>Date: {receipt.date}</Text>
      <Text style={styles.detail}>Transaction ID: {receipt.id}</Text>
      <Text style={styles.detail}>Note: {receipt.note || '—'}</Text>

      <Text style={styles.confirmed}>✅ Payment Sent Successfully</Text>

      {/* Developer Note: Future additions could include PDF export, share link, or branded overlays */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detail: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  confirmed: {
    fontSize: 16,
    color: 'green',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default TransactionReceipt;

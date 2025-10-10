// ReceiveMoney.js
// Developer Note: This file displays incoming payment details and confirms receipt.
// Designed for trust, clarity, and future expansion into notifications, QR scan, or deposit routing.

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const ReceiveMoney = ({ payment, onConfirm }) => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
    onConfirm(payment.id);
    // Developer Note: This triggers backend confirmation and can be expanded into routing or receipt logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Incoming Payment</Text>

      {/* Payment Details */}
      <Text style={styles.detail}>From: {payment.sender}</Text>
      <Text style={styles.detail}>Amount: ${payment.amount}</Text>
      <Text style={styles.detail}>Message: {payment.note || '—'}</Text>

      {/* Confirm Button */}
      {!confirmed ? (
        <Button title="Confirm Receipt" onPress={handleConfirm} />
      ) : (
        <Text style={styles.confirmed}>Payment Confirmed ✅</Text>
      )}

      {/* Developer Note: Future additions could include QR scan, routing options, or branded receipt */}
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

export default ReceiveMoney;

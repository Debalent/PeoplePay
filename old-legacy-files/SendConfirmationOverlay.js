// SendConfirmationOverlay.js
// Developer Note: This file displays a visual confirmation after sending money.
// Designed for trust, clarity, and future expansion into animation, biometric feedback, or branded UX.

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SendConfirmationOverlay = ({ recipient, amount }) => {
  return (
    <View style={styles.overlay}>
      <Image
  source={require('./assets/checkmark.svg')}
        style={styles.icon}
      />
      <Text style={styles.header}>Payment Sent!</Text>
      <Text style={styles.detail}>You sent ${amount} to {recipient}.</Text>
      <Text style={styles.subtext}>✅ Transaction complete and receipt saved.</Text>

      {/* Developer Note: Future additions could include animation, biometric feedback, or branded celebration */}
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    padding: 30,
    backgroundColor: '#e0ffe0',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 64,
    height: 64,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  subtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default SendConfirmationOverlay;

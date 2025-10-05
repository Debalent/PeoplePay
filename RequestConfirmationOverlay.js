// RequestConfirmationOverlay.js
// Developer Note: This file displays a visual confirmation after requesting money.
// Designed for clarity, trust, and future expansion into animation, reminders, or branded UX.

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RequestConfirmationOverlay = ({ recipient, amount }) => {
  return (
    <View style={styles.overlay}>
      <Image
        source={require('./assets/request.svg')}
        style={styles.icon}
      />
      <Text style={styles.header}>Request Sent!</Text>
      <Text style={styles.detail}>You requested ${amount} from {recipient}.</Text>
      <Text style={styles.subtext}>📨 They’ve been notified and can respond anytime.</Text>

      {/* Developer Note: Future additions could include animation, reminders, or branded celebration */}
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    padding: 30,
    backgroundColor: '#e6f0ff',
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

export default RequestConfirmationOverlay;

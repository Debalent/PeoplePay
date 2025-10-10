// RequestSuccessScreen.js
// Developer Note: This file displays a full-screen confirmation after a successful request.
// Designed for clarity, trust, and future expansion into animation, reminders, or share options.

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RequestSuccessScreen = ({ recipient, amount }) => {
  return (
    <View style={styles.container}>
      <Image
  source={require('./assets/request_success.svg')}
        style={styles.icon}
      />
      <Text style={styles.header}>Request Sent</Text>
      <Text style={styles.detail}>You requested ${amount} from {recipient}.</Text>
      <Text style={styles.subtext}>📨 They’ve been notified and can respond anytime.</Text>

      {/* Developer Note: Future additions could include animation, share button, or branded celebration */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  subtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default RequestSuccessScreen;

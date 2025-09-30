// TransferSuccessScreen.js
// Developer Note: This file displays a full-screen confirmation after a successful transfer.
// Designed for trust, clarity, and future expansion into animation, receipt preview, or share options.

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TransferSuccessScreen = ({ recipient, amount }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/success.png')}
        style={styles.icon}
      />
      <Text style={styles.header}>Transfer Successful</Text>
      <Text style={styles.detail}>You sent ${amount} to {recipient}.</Text>
      <Text style={styles.subtext}>✅ Funds delivered and receipt saved.</Text>

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
    backgroundColor: '#e6ffe6',
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

export default TransferSuccessScreen;

// SendMoney.js
// Developer Note: This file handles the send flow for transferring funds.
// Designed for clarity, trust, and future expansion into contact sync, biometric confirmation, or fee transparency.

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SendMoney = ({ onSend }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = () => {
    if (!recipient || !amount) {
      Alert.alert('Missing Info', 'Please enter both recipient and amount.');
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid dollar amount.');
      return;
    }

    onSend({ recipient, amount: parsedAmount });
    // Developer Note: This triggers backend send logic and can be expanded into trust overlays or fee preview
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Send Money</Text>

      {/* Recipient Input */}
      <TextInput
        style={styles.input}
        value={recipient}
        onChangeText={setRecipient}
        placeholder="Recipient Username or Email"
        autoCapitalize="none"
      />

      {/* Amount Input */}
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="Amount ($)"
        keyboardType="numeric"
      />

      {/* Send Button */}
      <Button title="Send" onPress={handleSend} />

      {/* Developer Note: Future additions could include contact sync, biometric confirmation, or fee preview */}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
  },
});

export default SendMoney;

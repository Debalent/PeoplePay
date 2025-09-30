// RequestMoney.js
// Developer Note: This file allows users to request money from a contact.
// Designed for clarity, trust, and future expansion into reminders, QR scan, or smart routing.

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const RequestMoney = ({ onRequest }) => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const handleRequest = () => {
    if (!recipient || !amount) {
      Alert.alert('Missing Info', 'Please enter both recipient and amount.');
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid dollar amount.');
      return;
    }

    onRequest({ recipient, amount: parsedAmount, note });
    // Developer Note: This triggers backend request logic and can be expanded into reminders or QR scan
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Request Money</Text>

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

      {/* Optional Note */}
      <TextInput
        style={styles.input}
        value={note}
        onChangeText={setNote}
        placeholder="Add a note (optional)"
      />

      {/* Request Button */}
      <Button title="Send Request" onPress={handleRequest} />

      {/* Developer Note: Future additions could include QR scan, reminders, or branded request flows */}
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

export default RequestMoney;

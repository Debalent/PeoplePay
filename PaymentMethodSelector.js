// PaymentMethodSelector.js
// Developer Note: This file lets users choose a payment method before sending.
// Designed for modular expansion into saved methods, fee previews, or dynamic routing.

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const methods = [
  { id: 'bank', label: 'Bank Account' },
  { id: 'card', label: 'Debit/Credit Card' },
  { id: 'wallet', label: 'PeoplePay Wallet' },
];

const PaymentMethodSelector = ({ selectedMethod, setSelectedMethod }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Payment Method</Text>

      {methods.map((method) => (
        <TouchableOpacity
          key={method.id}
          style={[
            styles.option,
            selectedMethod === method.id && styles.selected,
          ]}
          onPress={() => setSelectedMethod(method.id)}
        >
          <Text style={styles.label}>{method.label}</Text>
        </TouchableOpacity>
      ))}

      {/* Developer Note: Future additions could include fee preview, biometric fallback, or saved method logic */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  option: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  selected: {
    borderColor: '#2196F3',
    background

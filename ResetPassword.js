// ResetPassword.js
// Developer Note: This file handles password reset via email.
// Designed for secure recovery, accessibility, and future expansion into multi-step or biometric fallback.

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ResetPassword = ({ onReset }) => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    if (!email) {
      Alert.alert('Missing Email', 'Please enter your email address.');
      return;
    }

    onReset(email);
    // Developer Note: This triggers backend reset flow (can send email or SMS verification)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reset Your Password</Text>
      <Text style={styles.subtext}>
        Enter your email address and we’ll send you instructions to reset your password.
      </Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Reset Button */}
      <Button title="Send Reset Link" onPress={handleReset} />

      {/* Developer Note: Future additions could include phone number recovery or biometric fallback */}
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
    marginBottom: 10,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 14,
    color: '#666',
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

export default ResetPassword;

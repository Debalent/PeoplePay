// Signup.js
// Developer Note: This file handles new user registration.
// Designed for secure input handling, onboarding clarity, and future expansion into referral tracking or identity verification.

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Signup = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!name || !email || !password) {
      Alert.alert('Missing Info', 'Please fill out all fields.');
      return;
    }

    onSignup({ name, email, password });
    // Developer Note: This triggers parent-level signup logic (can be connected to backend API)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Your Account</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Full Name"
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Create Password"
        secureTextEntry
      />

      {/* Signup Button */}
      <Button title="Sign Up" onPress={handleSignup} />

      {/* Developer Note: Future additions could include referral code, terms consent, or phone verification */}
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

export default Signup;

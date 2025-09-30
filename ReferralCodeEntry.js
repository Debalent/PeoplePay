// ReferralCodeEntry.js
// Developer Note: This file captures an optional referral code during signup.
// Designed for bonus logic, outreach tracking, and future expansion into campaigns or influencer flows.

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ReferralCodeEntry = ({ onSubmit }) => {
  const [code, setCode] = useState('');

  const handleSubmit = () => {
    if (code.trim() === '') {
      Alert.alert('No Code Entered', 'You can skip this step or enter a referral code.');
      return;
    }

    onSubmit(code.trim());
    // Developer Note: This triggers backend validation and bonus logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Referral Code</Text>
      <Text style={styles.subtext}>
        If you received a referral code, enter it below to unlock bonuses.
      </Text>

      {/* Referral Code Input */}
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={setCode}
        placeholder="Enter Referral Code"
        autoCapitalize="characters"
      />

      {/* Submit Button */}
      <Button title="Apply Code" onPress={handleSubmit} />

      {/* Developer Note: Future additions could include QR scan, campaign tracking, or influencer attribution */}
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

export default ReferralCodeEntry;

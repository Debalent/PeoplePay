// VerifyIdentity.js
// Developer Note: This file collects identity details for verification.
// Designed for compliance, trust-building, and future expansion into document upload or third-party KYC.

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const VerifyIdentity = ({ onVerify }) => {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [ssnLast4, setSsnLast4] = useState('');

  const handleVerify = () => {
    if (!fullName || !dob || !ssnLast4) {
      Alert.alert('Missing Info', 'Please complete all fields.');
      return;
    }

    onVerify({ fullName, dob, ssnLast4 });
    // Developer Note: This triggers parent-level verification logic (can be connected to backend or KYC provider)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verify Your Identity</Text>

      {/* Full Name */}
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Full Legal Name"
      />

      {/* Date of Birth */}
      <TextInput
        style={styles.input}
        value={dob}
        onChangeText={setDob}
        placeholder="Date of Birth (MM/DD/YYYY)"
        keyboardType="numeric"
      />

      {/* SSN Last 4 */}
      <TextInput
        style={styles.input}
        value={ssnLast4}
        onChangeText={setSsnLast4}
        placeholder="Last 4 of SSN"
        keyboardType="numeric"
        maxLength={4}
      />

      {/* Verify Button */}
      <Button title="Submit for Verification" onPress={handleVerify} />

      {/* Developer Note: Future additions could include document upload, selfie capture, or address verification */}
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

export default VerifyIdentity;

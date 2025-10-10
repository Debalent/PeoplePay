// TermsConsent.js
// Developer Note: This file captures user consent to PeoplePay’s terms and privacy policy.
// Designed for legal compliance, onboarding clarity, and future expansion into jurisdictional logic or version tracking.

import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Button, Alert } from 'react-native';

const TermsConsent = ({ onConsent }) => {
  const [agreed, setAgreed] = useState(false);

  const handleContinue = () => {
    if (!agreed) {
      Alert.alert('Consent Required', 'You must agree to the terms to continue.');
      return;
    }

    onConsent();
    // Developer Note: This triggers onboarding progression and can be logged for compliance
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Terms & Privacy</Text>
      <Text style={styles.text}>
        By continuing, you agree to PeoplePay’s Terms of Service and Privacy Policy.
      </Text>

      {/* Consent Switch */}
      <View style={styles.row}>
        <Text style={styles.label}>I agree to the terms</Text>
        <Switch value={agreed} onValueChange={setAgreed} />
      </View>

      {/* Continue Button */}
      <Button title="Continue" onPress={handleContinue} />

      {/* Developer Note: Future additions could include links to full terms, jurisdictional logic, or version tracking */}
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
  text: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});

export default TermsConsent;

// TwoFactorSetup.js
// Developer Note: This file lets users toggle two-factor authentication.
// Designed for modular reuse, biometric fallback, and future expansion into jurisdictional logic or onboarding triggers.

import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Alert } from 'react-native';

const TwoFactorSetup = ({ initialEnabled, onUpdate }) => {
  const [enabled, setEnabled] = useState(initialEnabled);

  const handleToggle = (value) => {
    setEnabled(value);
    onUpdate(value);

    if (value) {
      Alert.alert('Two-Factor Enabled', 'Your account is now protected with 2FA.');
    } else {
      Alert.alert('Two-Factor Disabled', '2FA has been turned off. Your account may be less secure.');
    }

    // Developer Note: This triggers backend sync and can be expanded into biometric fallback or jurisdictional logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Two-Factor Authentication</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Enable 2FA</Text>
        <Switch value={enabled} onValueChange={handleToggle} />
      </View>

      {/* Developer Note: Future additions could include biometric fallback, jurisdictional filters, or onboarding triggers */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});

export default TwoFactorSetup;

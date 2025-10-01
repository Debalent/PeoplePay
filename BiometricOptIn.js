// BiometricOptIn.js
// Developer Note: This file lets users opt into biometric authentication (fingerprint or face unlock).
// Designed for modular reuse, fallback flows, and future expansion into jurisdictional logic or onboarding triggers.

import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Alert } from 'react-native';

const BiometricOptIn = ({ initialEnabled, onUpdate }) => {
  const [enabled, setEnabled] = useState(initialEnabled);

  const handleToggle = (value) => {
    setEnabled(value);
    onUpdate(value);

    if (value) {
      Alert.alert('Biometric Enabled', 'You can now use fingerprint or face unlock to access PeerVault.');
    } else {
      Alert.alert('Biometric Disabled', 'Biometric login has been turned off.');
    }

    // Developer Note: This triggers backend sync and can be expanded into fallback flows or jurisdictional logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Biometric Login</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Enable Fingerprint / Face Unlock</Text>
        <Switch value={enabled} onValueChange={handleToggle} />
      </View>

      {/* Developer Note: Future additions could include fallback flows, jurisdictional filters, or onboarding triggers */}
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

export default BiometricOptIn;

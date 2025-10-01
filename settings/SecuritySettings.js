// SecuritySettings.js
// Developer Note: This file is a central hub for security controls (2FA, biometric, password).
// Designed for modular reuse, compliance logic, and future expansion into jurisdictional triggers or onboarding flows.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TwoFactorSetup from './TwoFactorSetup';
import BiometricOptIn from './BiometricOptIn';

const SecuritySettings = ({ securityState, onUpdate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Security Settings</Text>
      <TwoFactorSetup
        initialEnabled={securityState.twoFactorEnabled}
        onUpdate={(value) => onUpdate({ ...securityState, twoFactorEnabled: value })}
      />
      <BiometricOptIn
        initialEnabled={securityState.biometricEnabled}
        onUpdate={(value) => onUpdate({ ...securityState, biometricEnabled: value })}
      />
      {/* Developer Note: Future additions could include password reset, jurisdictional triggers, or onboarding flows */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default SecuritySettings;

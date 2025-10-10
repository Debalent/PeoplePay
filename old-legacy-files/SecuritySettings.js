// SecuritySettings.js
// Developer Note: This file manages user-facing security preferences.
// All settings are functional and modular—ready for backend integration and future scaling.

import React, { useState } from 'react';
import { View, Text, Switch, TextInput, StyleSheet, Picker } from 'react-native';

const SecuritySettings = () => {
  const [biometricEnabled, setBiometricEnabled] = useState(false); // Biometric login toggle
  const [pin, setPin] = useState(''); // User-defined PIN
  const [sessionTimeout, setSessionTimeout] = useState('5'); // Session timeout in minutes
  const [trustedDeviceEnabled, setTrustedDeviceEnabled] = useState(false); // Trusted device toggle
  const [loginAlertsEnabled, setLoginAlertsEnabled] = useState(true); // Login alert toggle

  const handleBiometricToggle = () => {
    setBiometricEnabled(!biometricEnabled);
    // Developer Note: Connect to device-level biometric auth (Face ID, fingerprint)
  };

  const handleTrustedDeviceToggle = () => {
    setTrustedDeviceEnabled(!trustedDeviceEnabled);
    // Developer Note: Can be linked to device fingerprinting or token-based trust
  };

  const handleLoginAlertsToggle = () => {
    setLoginAlertsEnabled(!loginAlertsEnabled);
    // Developer Note: Alerts can be sent via push or email on login events
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Security Settings</Text>

      {/* Biometric Login */}
      <View style={styles.row}>
        <Text style={styles.label}>Enable Biometric Login</Text>
        <Switch value={biometricEnabled} onValueChange={handleBiometricToggle} />
      </View>

      {/* PIN Setup */}
      <View style={styles.row}>
        <Text style={styles.label}>Set PIN</Text>
        <TextInput
          style={styles.input}
          value={pin}
          onChangeText={setPin}
          keyboardType="numeric"
          secureTextEntry
          maxLength={6}
          placeholder="Enter 4–6 digit PIN"
        />
        {/* Developer Note: PIN can be stored securely using encrypted storage or backend validation */}
      </View>

      {/* Session Timeout */}
      <View style={styles.row}>
        <Text style={styles.label}>Session Timeout (minutes)</Text>
        <Picker
          selectedValue={sessionTimeout}
          style={styles.picker}
          onValueChange={(itemValue) => setSessionTimeout(itemValue)}
        >
          <Picker.Item label="5 minutes" value="5" />
          <Picker.Item label="10 minutes" value="10" />
          <Picker.Item label="15 minutes" value="15" />
        </Picker>
        {/* Developer Note: Timeout can trigger auto-logout or re-authentication */}
      </View>

      {/* Trusted Device Toggle */}
      <View style={styles.row}>
        <Text style={styles.label}>Enable Trusted Device</Text>
        <Switch value={trustedDeviceEnabled} onValueChange={handleTrustedDeviceToggle} />
        {/* Developer Note: Future additions could include device registration and trust scoring */}
      </View>

      {/* Login Alerts */}
      <View style={styles.row}>
        <Text style={styles.label}>Enable Login Alerts</Text>
        <Switch value={loginAlertsEnabled} onValueChange={handleLoginAlertsToggle} />
        {/* Developer Note: Alerts can notify users of suspicious or new login activity */}
      </View>
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
  },
  row: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default SecuritySettings;

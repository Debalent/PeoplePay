// SessionTimeoutControl.js
// Developer Note: This file sets auto-logout duration for security.
// Designed for modular reuse, security comfort, and future expansion into jurisdictional defaults or saved preferences.

import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet, Alert } from 'react-native';

const SessionTimeoutControl = ({ initialTimeout, onTimeoutChange }) => {
  const [timeout, setTimeout] = useState(initialTimeout);

  const handleChange = (value) => {
    setTimeout(value);
    onTimeoutChange(value);
    Alert.alert('Session Timeout Updated', `Auto-logout set to ${value} minutes.`);

    // Developer Note: This can be expanded into jurisdictional defaults or saved preferences
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Session Timeout</Text>
      <Picker selectedValue={timeout} onValueChange={handleChange} style={styles.picker}>
        <Picker.Item label="5 minutes" value="5" />
        <Picker.Item label="15 minutes" value="15" />
        <Picker.Item label="30 minutes" value="30" />
        <Picker.Item label="60 minutes" value="60" />
      </Picker>
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
  picker: {
    height: 50,
    width: '100%',
  },
});

export default SessionTimeoutControl;

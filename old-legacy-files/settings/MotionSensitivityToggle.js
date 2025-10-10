// MotionSensitivityToggle.js
// Developer Note: This file reduces animations for motion-sensitive users.
// Designed for modular reuse, accessibility comfort, and future expansion into saved preferences or onboarding triggers.

import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Alert } from 'react-native';

const MotionSensitivityToggle = ({ initialEnabled, onUpdate }) => {
  const [enabled, setEnabled] = useState(initialEnabled);

  const handleToggle = (value) => {
    setEnabled(value);
    onUpdate(value);
    Alert.alert('Motion Sensitivity Updated', value ? 'Animations are now reduced.' : 'Animations are restored.');

    // Developer Note: This can be expanded into accessibility sync or saved preferences
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reduce Motion</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Enable Motion Sensitivity</Text>
        <Switch value={enabled} onValueChange={handleToggle} />
      </View>
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
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});

export default MotionSensitivityToggle;

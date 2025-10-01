// Accessibility.js
// Developer Note: This file manages accessibility preferences for PeoplePay users.
// Designed for inclusive design, WCAG alignment, and future expansion into screen reader or haptic support.

import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Accessibility = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [largeText, setLargeText] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Accessibility Options</Text>

      {/* High Contrast Mode */}
      <View style={styles.row}>
        <Text style={styles.label}>High Contrast Mode</Text>
        <Switch value={highContrast} onValueChange={setHighContrast} />
        {/* Developer Note: Improves visibility for users with low vision or color sensitivity */}
      </View>

      {/* Reduce Motion */}
      <View style={styles.row}>
        <Text style={styles.label}>Reduce Motion</Text>
        <Switch value={reduceMotion} onValueChange={setReduceMotion} />
        {/* Developer Note: Minimizes animations for users with motion sensitivity */}
      </View>

      {/* Large Text */}
      <View style={styles.row}>
        <Text style={styles.label}>Large Text</Text>
        <Switch value={largeText} onValueChange={setLargeText} />
        {/* Developer Note: Increases font size for readability */}
      </View>

      {/* Developer Note: Settings can be persisted to user profile or device preferences */}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});

export default Accessibility;

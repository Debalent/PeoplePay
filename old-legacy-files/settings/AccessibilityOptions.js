// AccessibilityOptions.js
// Developer Note: This file lets users adjust accessibility preferences.
// Designed for modular reuse, inclusive defaults, and future expansion into motion sensitivity or screen reader support.

import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const AccessibilityOptions = ({ initialSettings, onUpdate }) => {
  const [highContrast, setHighContrast] = useState(initialSettings.highContrast);
  const [reduceMotion, setReduceMotion] = useState(initialSettings.reduceMotion);
  const [largeText, setLargeText] = useState(initialSettings.largeText);

  const handleToggle = (type, value) => {
    if (type === 'contrast') setHighContrast(value);
    if (type === 'motion') setReduceMotion(value);
    if (type === 'text') setLargeText(value);

    onUpdate({
      highContrast,
      reduceMotion,
      largeText,
    });
    // Developer Note: This triggers backend sync and can be expanded into screen reader support or jurisdictional defaults
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Accessibility Options</Text>

      {/* High Contrast Mode */}
      <View style={styles.row}>
        <Text style={styles.label}>High Contrast Mode</Text>
        <Switch
          value={highContrast}
          onValueChange={(value) => handleToggle('contrast', value)}
        />
      </View>

      {/* Reduce Motion */}
      <View style={styles.row}>
        <Text style={styles.label}>Reduce Motion</Text>
        <Switch
          value={reduceMotion}
          onValueChange={(value) => handleToggle('motion', value)}
        />
      </View>

      {/* Large Text */}
      <View style={styles.row}>
        <Text style={styles.label}>Enable Large Text</Text>
        <Switch
          value={largeText}
          onValueChange={(value) => handleToggle('text', value)}
        />
      </View>

      {/* Developer Note: Future additions could include screen reader support, jurisdictional defaults, or onboarding triggers */}
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});

export default AccessibilityOptions;

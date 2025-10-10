// ThemeToggle.js
// Developer Note: This file switches between UI themes (light, dark, high contrast).
// Designed for modular reuse, saved preferences, and future expansion into jurisdictional defaults or onboarding triggers.

import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet, Alert } from 'react-native';

const ThemeToggle = ({ initialTheme, onThemeChange }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleChange = (value) => {
    setTheme(value);
    onThemeChange(value);
    Alert.alert('Theme Updated', `You are now using the ${value} theme.`);

    // Developer Note: This triggers UI refresh and can be expanded into saved preferences or jurisdictional defaults
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Theme</Text>
      <Picker selectedValue={theme} onValueChange={handleChange} style={styles.picker}>
        <Picker.Item label="Light" value="light" />
        <Picker.Item label="Dark" value="dark" />
        <Picker.Item label="High Contrast" value="high-contrast" />
      </Picker>

      {/* Developer Note: Future additions could include onboarding triggers, jurisdictional defaults, or accessibility sync */}
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

export default ThemeToggle;

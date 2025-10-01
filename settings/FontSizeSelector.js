// FontSizeSelector.js
// Developer Note: This file lets users adjust text size for readability.
// Designed for modular reuse, accessibility comfort, and future expansion into saved preferences or onboarding triggers.

import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet, Alert } from 'react-native';

const FontSizeSelector = ({ initialSize, onSizeChange }) => {
  const [size, setSize] = useState(initialSize);

  const handleChange = (value) => {
    setSize(value);
    onSizeChange(value);
    Alert.alert('Font Size Updated', `Text is now set to ${value} size.`);

    // Developer Note: This triggers UI refresh and can be expanded into accessibility sync or saved preferences
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Font Size</Text>
      <Picker selectedValue={size} onValueChange={handleChange} style={styles.picker}>
        <Picker.Item label="Small" value="small" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Large" value="large" />
        <Picker.Item label="Extra Large" value="xl" />
      </Picker>

      {/* Developer Note: Future additions could include accessibility sync, onboarding triggers, or jurisdictional defaults */}
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

export default FontSizeSelector;

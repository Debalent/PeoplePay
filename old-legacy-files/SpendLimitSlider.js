// SpendLimitSlider.js
// Developer Note: This file sets spend limits for linked accounts.
// Designed for modular reuse, approval flows, and future expansion into jurisdictional logic or activity alerts.

import React, { useState } from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';

const SpendLimitSlider = ({ initialLimit, onLimitChange }) => {
  const [limit, setLimit] = useState(initialLimit);

  const handleChange = (value) => {
    setLimit(value);
    onLimitChange(value);

    // Developer Note: This triggers backend sync and can be expanded into approval flows or activity alerts
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Spending Limit</Text>
      <Text style={styles.label}>Daily Cap: ${limit.toFixed(2)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={500}
        step={5}
        value={limit}
        onValueChange={handleChange}
        minimumTrackTintColor="#4CAF50"
        maximumTrackTintColor="#ccc"
      />

      {/* Developer Note: Future additions could include weekly/monthly toggles, jurisdictional filters, or alert triggers */}
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
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
});

export default SpendLimitSlider;

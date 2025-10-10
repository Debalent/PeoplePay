// JurisdictionSelector.js
// Developer Note: This file lets users select their legal region.
// Designed for modular reuse, compliance logic, and future expansion into region-specific disclosures or onboarding triggers.

import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet, Alert } from 'react-native';

const JurisdictionSelector = ({ initialRegion, onRegionChange }) => {
  const [region, setRegion] = useState(initialRegion);

  const handleChange = (value) => {
    setRegion(value);
    onRegionChange(value);
    Alert.alert('Region Updated', `Your jurisdiction is now set to ${value}.`);

    // Developer Note: This can trigger region-specific disclosures or onboarding logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Jurisdiction</Text>
      <Picker selectedValue={region} onValueChange={handleChange} style={styles.picker}>
        <Picker.Item label="United States" value="US" />
        <Picker.Item label="European Union" value="EU" />
        <Picker.Item label="Canada" value="CA" />
        <Picker.Item label="Other" value="Other" />
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

export default JurisdictionSelector;

// LanguageSelector.js
// Developer Note: This file allows users to choose their preferred language.
// Designed for accessibility, localization, and future expansion into dynamic translation or region-specific content.

import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const LanguageSelector = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleChange = (lang) => {
    setSelectedLanguage(lang);
    onLanguageChange(lang);
    // Developer Note: This triggers app-wide language update (can be tied to i18n or backend profile)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Language</Text>

      <Picker
        selectedValue={selectedLanguage}
        style={styles.picker}
        onValueChange={handleChange}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Spanish" value="es" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="Mandarin" value="zh" />
        <Picker.Item label="Arabic" value="ar" />
        {/* Developer Note: Add more languages based on user base or region */}
      </Picker>
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
  picker: {
    height: 50,
    width: '100%',
  },
});

export default LanguageSelector;

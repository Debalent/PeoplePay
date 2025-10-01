// LanguageSelector.js
// Developer Note: This file allows users to select their preferred language.
// Designed for modular reuse, localization, and future expansion into jurisdictional defaults or onboarding flows.

import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const LanguageSelector = ({ selectedLanguage, setSelectedLanguage }) => {
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' },
    { code: 'fr', label: 'French' },
    { code: 'zh', label: 'Chinese' },
    { code: 'ar', label: 'Arabic' },
    // Developer Note: Future additions could include auto-detect, jurisdictional defaults, or onboarding triggers
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>App Language</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(value) => setSelectedLanguage(value)}
        style={styles.picker}
      >
        {languages.map((lang) => (
          <Picker.Item key={lang.code} label={lang.label} value={lang.code} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default LanguageSelector;

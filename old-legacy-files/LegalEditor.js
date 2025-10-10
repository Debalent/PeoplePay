// LegalEditor.js
// Developer Note: This file allows admins to edit legal content like terms and privacy policies.
// Designed for secure updates, modular reuse, and future expansion into version control or jurisdictional logic.

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LegalEditor = ({ initialTerms, onSave }) => {
  const [termsText, setTermsText] = useState(initialTerms || '');

  const handleSave = () => {
    if (!termsText.trim()) {
      Alert.alert('Empty Terms', 'Legal content cannot be blank.');
      return;
    }

    onSave(termsText.trim());
    // Developer Note: This triggers backend update and can be logged for audit trail
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Legal Terms</Text>

      {/* Terms Input */}
      <TextInput
        style={styles.textArea}
        value={termsText}
        onChangeText={setTermsText}
        placeholder="Enter updated terms and conditions..."
        multiline
        numberOfLines={10}
        textAlignVertical="top"
      />

      {/* Save Button */}
      <Button title="Save Terms" onPress={handleSave} />

      {/* Developer Note: Future additions could include jurisdiction filters, version history, or markdown preview */}
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
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    height: 200,
    marginBottom: 20,
  },
});

export default LegalEditor;

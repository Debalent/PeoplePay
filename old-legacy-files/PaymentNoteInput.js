// PaymentNoteInput.js
// Developer Note: This file provides an optional note field for send/request flows.
// Designed for clarity, trust, and future expansion into emoji support, templates, or smart suggestions.

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const PaymentNoteInput = ({ note, setNote }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Add a Note (optional)</Text>
      <TextInput
        style={styles.input}
        value={note}
        onChangeText={setNote}
        placeholder="What's this for?"
        multiline
        numberOfLines={3}
        textAlignVertical="top"
      />
      {/* Developer Note: Future additions could include emoji picker, smart suggestions, or branded templates */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
});

export default PaymentNoteInput;

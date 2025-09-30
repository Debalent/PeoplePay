// SecurityQuestions.js
// Developer Note: This file manages user-selected security questions for account recovery.
// Designed for accessibility, modular reuse, and future backend integration with encrypted storage.

import React, { useState } from 'react';
import { View, Text, TextInput, Picker, StyleSheet, Button } from 'react-native';

const SecurityQuestions = ({ onSave }) => {
  const [selectedQuestion, setSelectedQuestion] = useState('What is your mother’s maiden name?');
  const [answer, setAnswer] = useState('');

  const handleSave = () => {
    onSave({ question: selectedQuestion, answer });
    // Developer Note: This can be encrypted and stored securely for recovery flows
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Security Question</Text>

      {/* Question Picker */}
      <Picker
        selectedValue={selectedQuestion}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedQuestion(itemValue)}
      >
        <Picker.Item label="What is your mother’s maiden name?" value="What is your mother’s maiden name?" />
        <Picker.Item label="What was your first pet’s name?" value="What was your first pet’s name?" />
        <Picker.Item label="What is the name of your elementary school?" value="What is the name of your elementary school?" />
        <Picker.Item label="What city were you born in?" value="What city were you born in?" />
      </Picker>

      {/* Answer Input */}
      <TextInput
        style={styles.input}
        value={answer}
        onChangeText={setAnswer}
        placeholder="Your Answer"
      />

      {/* Save Button */}
      <Button title="Save Security Question" onPress={handleSave} />

      {/* Developer Note: Future additions could include multi-question setup or biometric fallback */}
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
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
  },
});

export default SecurityQuestions;

// EditProfileForm.js
// Developer Note: This file allows users to edit their profile details.
// Designed for modular reuse, backend syncing, and future expansion into onboarding or jurisdictional logic.

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const EditProfileForm = ({ initialData, onSave }) => {
  const [name, setName] = useState(initialData.name || '');
  const [email, setEmail] = useState(initialData.email || '');
  const [bio, setBio] = useState(initialData.bio || '');

  const handleSave = () => {
    if (!name || !email) {
      Alert.alert('Missing Info', 'Name and email are required.');
      return;
    }

    onSave({ name, email, bio });
    // Developer Note: This triggers backend update and can be tied to onboarding or jurisdictional logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Full Name"
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Bio Input */}
      <TextInput
        style={styles.input}
        value={bio}
        onChangeText={setBio}
        placeholder="Short Bio (optional)"
        multiline
      />

      {/* Save Button */}
      <Button title="Save Changes" onPress={handleSave} />

      {/* Developer Note: Future additions could include avatar triggers, jurisdiction filters, or onboarding logic */}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});

export default EditProfileForm;

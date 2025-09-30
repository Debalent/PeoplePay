// EditProfile.js
// Developer Note: This file allows users to update their profile information.
// Designed for accessibility, modular reuse, and future backend integration.

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const EditProfile = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(user.avatar);

  const handleSave = () => {
    const updatedUser = { name, email, avatar };
    onSave(updatedUser);
    // Developer Note: This triggers parent-level update and can be connected to backend API
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      {/* Avatar Preview */}
      <Image source={{ uri: avatar }} style={styles.avatar} />
      {/* Developer Note: Avatar can be updated via image picker or camera integration */}

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
      />

      {/* Save Button */}
      <Button title="Save Changes" onPress={handleSave} />

      {/* Developer Note: Future additions could include phone number, bio, or social links */}
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#eee',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
  },
});

export default EditProfile;

// UserProfile.js
// Developer Note: This file displays core user profile information.
// Designed for modular reuse, trust-building, and future expansion into avatars, badges, or verification.

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UserProfile = ({ user, onEdit }) => {
  return (
    <View style={styles.container}>
      {/* Profile Avatar */}
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      {/* Developer Note: Avatar can be replaced with initials or default icon if missing */}

      {/* User Info */}
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.button} onPress={onEdit}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Developer Note: Future additions could include verification badge, user tier, or linked accounts */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UserProfile;

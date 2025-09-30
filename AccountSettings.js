// AccountSettings.js
// Developer Note: This file provides access to core account preferences.
// Designed for modular navigation, user empowerment, and future expansion into billing or subscription tiers.

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AccountSettings = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Settings</Text>

      {/* Navigation Links */}
      <TouchableOpacity style={styles.row} onPress={() => onNavigate('EditProfile')}>
        <Text style={styles.label}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={() => onNavigate('SecuritySettings')}>
        <Text style={styles.label}>Security Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={() => onNavigate('NotificationSettings')}>
        <Text style={styles.label}>Notification Preferences</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={() => onNavigate('Accessibility')}>
        <Text style={styles.label}>Accessibility Options</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={() => onNavigate('DeleteAccount')}>
        <Text style={styles.label}>Delete Account</Text>
      </TouchableOpacity>

      {/* Developer Note: Future additions could include billing, subscription tiers, or linked services */}
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
  row: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});

export default AccountSettings;

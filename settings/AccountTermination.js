// AccountTermination.js
// Developer Note: This file allows users to initiate account termination.
// Designed for clarity, user control, and future expansion into secure confirmation and backend logic.

import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const DeleteAccount = ({ onDelete }) => {
  const [confirmed, setConfirmed] = useState(false);

  const handleDelete = () => {
    if (!confirmed) {
      Alert.alert(
        'Confirm Deletion',
        'Are you sure you want to delete your account? This action cannot be undone.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Delete', style: 'destructive', onPress: () => setConfirmed(true) },
        ]
      );
    } else {
      onDelete();
      // Developer Note: This triggers parent-level deletion logic (can be connected to backend API)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Delete Account</Text>
      <Text style={styleswarning}>
        This will permanently remove your PeoplePay account and all associated data.
      </Text>
      <Button title="Delete My Account" color="#F44336" onPress={handleDelete} />
      {/* Developer Note: Future additions could include multi-step verification or export option */}
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
    marginBottom: 10,
  },
  warning: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
});

export default DeleteAccount;

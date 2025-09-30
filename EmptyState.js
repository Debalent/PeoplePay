// EmptyState.js
// Developer Note: This file handles empty screen scenarios across PeoplePay.
// Designed for modular reuse with friendly messaging and optional action prompts.

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const EmptyState = ({ message = 'No data available.', actionLabel, onAction }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>

      {/* Developer Note: Optional action button for user engagement (e.g. Add, Retry, Invite) */}
      {actionLabel && onAction && (
        <Button title={actionLabel} onPress={onAction} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  message: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default EmptyState;

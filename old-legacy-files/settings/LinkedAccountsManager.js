// LinkedAccountsManager.js
// Developer Note: This file displays and manages linked financial accounts.
// Designed for modular reuse, sync status, and future expansion into trust overlays or jurisdictional logic.

import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const LinkedAccountsManager = ({ accounts, onUnlink }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.label}>Type: {item.type}</Text>
      <Text style={styles.label}>Provider: {item.provider}</Text>
      <Text style={styles.label}>Last 4: ****{item.last4}</Text>
      <Button title="Unlink" onPress={() => onUnlink(item.id)} />
      {/* Developer Note: Future additions could include sync status, trust overlays, or jurisdiction filters */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Linked Accounts</Text>
      <FlatList
        data={accounts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
});

export default LinkedAccountsManager;

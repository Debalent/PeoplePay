// TransactionMonitor.js
// Developer Note: This file displays recent transactions for admin oversight.
// Designed for anomaly detection, modular filtering, and future expansion into export or audit logic.

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TransactionMonitor = ({ transactions }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.label}>User: {item.userName}</Text>
      <Text style={styles.label}>Amount: ${item.amount}</Text>
      <Text style={styles.label}>Type: {item.type}</Text>
      <Text style={styles.label}>Status: {item.status}</Text>
      <Text style={styles.label}>Timestamp: {item.timestamp}</Text>
      {/* Developer Note: Future additions could include flags, filters, or export options */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction Monitor</Text>
      <FlatList
        data={transactions}
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
  },
});

export default TransactionMonitor;

// TransactionHistoryList.js
// Developer Note: This file displays a list of past transactions.
// Designed for modular reuse, filters, and future expansion into export options or jurisdictional logic.

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TransactionHistoryList = ({ transactions }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
      <Text style={styles.meta}>{item.type} • {item.date}</Text>
      <Text style={styles.recipient}>To/From: {item.counterparty}</Text>
      {/* Developer Note: Future additions could include filters, export options, or jurisdictional flags */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction History</Text>
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
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  meta: {
    fontSize: 14,
    color: '#666',
  },
  recipient: {
    fontSize: 14,
    color: '#444',
    marginTop: 5,
  },
});

export default TransactionHistoryList;

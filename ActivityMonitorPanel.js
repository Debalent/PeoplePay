// ActivityMonitorPanel.js
// Developer Note: This file displays monitored activity for linked accounts.
// Designed for modular reuse, alert triggers, and future expansion into approval flows or jurisdictional filters.

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ActivityMonitorPanel = ({ activity }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
      <Text style={styles.meta}>{item.type} • {item.date}</Text>
      <Text style={styles.recipient}>To/From: {item.counterparty}</Text>
      <Text style={styles.flag}>{item.flagged ? '⚠️ Flagged' : '✅ Normal'}</Text>
      {/* Developer Note: Future additions could include alert triggers, approval flows, or jurisdictional filters */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Monitored Activity</Text>
      <FlatList
        data={activity}
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
    backgroundColor: '#fefefe',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
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
  flag: {
    fontSize: 14,
    marginTop: 5,
    color: '#c00',
  },
});

export default ActivityMonitorPanel;

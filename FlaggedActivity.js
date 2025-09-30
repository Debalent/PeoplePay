// FlaggedActivity.js
// Developer Note: This file displays flagged transactions or user behavior for admin review.
// Designed for anomaly detection, escalation workflows, and future expansion into trust signals or fraud scoring.

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FlaggedActivity = ({ flags }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.label}>User: {item.userName}</Text>
      <Text style={styles.label}>Reason: {item.reason}</Text>
      <Text style={styles.label}>Timestamp: {item.timestamp}</Text>
      <Text style={styles.label}>Severity: {item.severity}</Text>
      {/* Developer Note: Future additions could include escalation buttons, notes, or resolution status */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flagged Activity</Text>
      <FlatList
        data={flags}
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
    backgroundColor: '#ffeaea',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
});

export default FlaggedActivity;

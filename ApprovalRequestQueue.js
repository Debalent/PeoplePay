// ApprovalRequestQueue.js
// Developer Note: This file displays pending requests for parental approval.
// Designed for modular reuse, jurisdictional logic, and future expansion into alert triggers or audit trails.

import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const ApprovalRequestQueue = ({ requests, onApprove, onReject }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.meta}>Requested by: {item.requester} • {item.date}</Text>
      <View style={styles.actions}>
        <Button title="Approve" onPress={() => onApprove(item.id)} />
        <Button title="Reject" onPress={() => onReject(item.id)} color="#c00" />
      </View>
      {/* Developer Note: Future additions could include jurisdictional filters, alert triggers, or audit trail logging */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pending Approvals</Text>
      <FlatList
        data={requests}
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
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  meta: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ApprovalRequestQueue;

// AdminDashboard.js
// Developer Note: This file provides a high-level overview of platform activity for owners/admins.
// Designed for modular expansion into analytics, user segmentation, and trust signals.

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AdminDashboard = ({ stats }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Admin Dashboard</Text>

      {/* Stat Cards */}
      <View style={styles.card}>
        <Text style={styles.label}>Total Users</Text>
        <Text style={styles.value}>{stats.totalUsers}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Active Transactions</Text>
        <Text style={styles.value}>{stats.activeTransactions}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Reported Issues</Text>
        <Text style={styles.value}>{stats.reportedIssues}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Referral Signups</Text>
        <Text style={styles.value}>{stats.referralSignups}</Text>
      </View>

      {/* Developer Note: Future additions could include charts, filters, or export options */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'stretch',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
});

export default AdminDashboard;

// AnalyticsOverview.js
// Developer Note: This file displays high-level analytics for platform performance.
// Designed for modular expansion into charts, filters, and export logic.

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AnalyticsOverview = ({ metrics }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Analytics Overview</Text>

      {/* Metric Cards */}
      <View style={styles.card}>
        <Text style={styles.label}>Monthly Active Users</Text>
        <Text style={styles.value}>{metrics.monthlyActiveUsers}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Total Transactions</Text>
        <Text style={styles.value}>{metrics.totalTransactions}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Average Session Time</Text>
        <Text style={styles.value}>{metrics.avgSessionTime} mins</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Referral Conversion Rate</Text>
        <Text style={styles.value}>{metrics.referralConversionRate}%</Text>
      </View>

      {/* Developer Note: Future additions could include charts, filters, export options, or investor-grade dashboards */}
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
    backgroundColor: '#eef',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#444',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
});

export default AnalyticsOverview;

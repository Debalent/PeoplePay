// MonthlyStatementCard.js
// Developer Note: This file displays a summary of monthly transactions.
// Designed for modular reuse, export logic, and future expansion into branded overlays or jurisdictional filters.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MonthlyStatementCard = ({ statement }) => {
  const { month, year, totalSent, totalReceived, netBalance } = statement;

  return (
    <View style={styles.card}>
      <Text style={styles.header}>{month} {year} Statement</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Total Sent:</Text>
        <Text style={styles.value}>${totalSent.toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Total Received:</Text>
        <Text style={styles.value}>${totalReceived.toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Net Balance:</Text>
        <Text style={[styles.value, netBalance < 0 && styles.negative]}>
          ${netBalance.toFixed(2)}
        </Text>
      </View>

      {/* Developer Note: Future additions could include export to PDF, jurisdictional filters, or branded overlays */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fefefe',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  negative: {
    color: '#c00',
  },
});

export default MonthlyStatementCard;

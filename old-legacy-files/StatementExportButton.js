// StatementExportButton.js
// Developer Note: This file triggers export of a monthly statement.
// Designed for modular reuse, PDF generation, and future expansion into email triggers or jurisdictional logic.

import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

const StatementExportButton = ({ statement }) => {
  const handleExport = () => {
    // Developer Note: This would trigger PDF generation or backend export logic
    Alert.alert('Export Started', `Your ${statement.month} ${statement.year} statement is being prepared.`);
  };

  return (
    <View style={styles.container}>
      <Button title="Export Statement" onPress={handleExport} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
});

export default StatementExportButton;

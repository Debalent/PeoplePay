// PrivacySettings.js
// Developer Note: This file lets users manage visibility and data sharing preferences.
// Designed for modular reuse, compliance logic, and future expansion into audit logs or trust overlays.

import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const PrivacySettings = ({ initialSettings, onUpdate }) => {
  const [profileVisible, setProfileVisible] = useState(initialSettings.profileVisible);
  const [searchable, setSearchable] = useState(initialSettings.searchable);
  const [dataSharing, setDataSharing] = useState(initialSettings.dataSharing);

  const handleToggle = (type, value) => {
    if (type === 'profile') setProfileVisible(value);
    if (type === 'search') setSearchable(value);
    if (type === 'sharing') setDataSharing(value);

    onUpdate({
      profileVisible,
      searchable,
      dataSharing,
    });
    // Developer Note: This triggers backend sync and can be expanded into jurisdictional filters or audit logs
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Privacy Settings</Text>

      {/* Profile Visibility */}
      <View style={styles.row}>
        <Text style={styles.label}>Show Profile to Others</Text>
        <Switch
          value={profileVisible}
          onValueChange={(value) => handleToggle('profile', value)}
        />
      </View>

      {/* Searchability */}
      <View style={styles.row}>
        <Text style={styles.label}>Allow Search by Username</Text>
        <Switch
          value={searchable}
          onValueChange={(value) => handleToggle('search', value)}
        />
      </View>

      {/* Data Sharing */}
      <View style={styles.row}>
        <Text style={styles.label}>Share Usage Data (opt-in)</Text>
        <Switch
          value={dataSharing}
          onValueChange={(value) => handleToggle('sharing', value)}
        />
      </View>

      {/* Developer Note: Future additions could include jurisdiction filters, audit logs, or trust overlays */}
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});

export default PrivacySettings;

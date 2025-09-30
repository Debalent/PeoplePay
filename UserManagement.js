// UserManagement.js
// Developer Note: This file displays a list of users for admin review and control.
// Designed for modular expansion into role-based access, suspension logic, and audit trails.

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const UserManagement = ({ users, onSuspend, onViewProfile }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>

      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onViewProfile(item.id)}>
          <Text style={styles.link}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSuspend(item.id)}>
          <Text style={styles.link}>Suspend</Text>
        </TouchableOpacity>
      </View>

      {/* Developer Note: Future additions could include role tags, activity status, or verification flags */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Management</Text>
      <FlatList
        data={users}
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
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
});

export default UserManagement;

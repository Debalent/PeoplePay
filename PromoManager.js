// PromoManager.js
// Developer Note: This file allows admins to manage active promotions and campaign visibility.
// Designed for modular control, backend syncing, and future expansion into tiered promos or A/B testing.

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, FlatList } from 'react-native';

const PromoManager = ({ promos, onUpdatePromo }) => {
  const [newPromo, setNewPromo] = useState('');
  const [isActive, setIsActive] = useState(true);

  const handleAddPromo = () => {
    if (!newPromo.trim()) return;
    onUpdatePromo({ message: newPromo.trim(), active: isActive });
    setNewPromo('');
    setIsActive(true);
    // Developer Note: This triggers backend update and can be tied to user segmentation or campaign logic
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.status}>{item.active ? 'Active' : 'Inactive'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Promo Manager</Text>

      {/* Promo Input */}
      <TextInput
        style={styles.input}
        value={newPromo}
        onChangeText={setNewPromo}
        placeholder="Enter Promo Message"
      />

      {/* Active Toggle */}
      <View style={styles.row}>
        <Text style={styles.label}>Activate Promo</Text>
        <Switch value={isActive} onValueChange={setIsActive} />
      </View>

      {/* Add Button */}
      <Button title="Add Promo" onPress={handleAddPromo} />

      {/* Existing Promos */}
      <FlatList
        data={promos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 20 }}
      />

      {/* Developer Note: Future additions could include expiration dates, user tiers, or analytics */}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 15,
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
  card: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    fontWeight: '500',
  },
  status: {
    fontSize: 14,
    color: '#666',
  },
});

export default PromoManager;

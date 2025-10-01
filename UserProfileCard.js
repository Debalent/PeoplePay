// UserProfileCard.js
// Developer Note: This file displays the user's avatar, name, and balance.
// Designed for modular reuse, edit triggers, and future expansion into trust signals or tier badges.

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfileCard = ({ user }) => {
  return (
    <View style={styles.card}>
      {/* Avatar */}
      <Image
        source={{ uri: user.avatarUrl }}
        style={styles.avatar}
      />

      {/* Name */}
      <Text style={styles.name}>{user.name}</Text>

      {/* Balance */}
      <Text style={styles.balance}>Balance: ${user.balance.toFixed(2)}</Text>

      {/* Developer Note: Future additions could include edit triggers, tier badges, or trust overlays */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  balance: {
    fontSize: 16,
    color: '#333',
  },
});

export default UserProfileCard;

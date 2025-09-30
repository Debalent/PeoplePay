// Notifications.js
// Handles toast and modal notifications across PeoplePay

import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Notification = ({ type, message, visible }) => {
  const backgroundColor = {
    success: '#4CAF50',
    error: '#F44336',
    info: '#2196F3',
    warning: '#FFC107',
  }[type] || '#333';

  return visible ? (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    padding: 12,
    borderRadius: 8,
    zIndex: 1000,
    elevation: 5,
  },
  message: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Notification;

// PromoBanner.js
// Developer Note: This file displays promotional banners across PeoplePay.
// Designed for modular reuse, brand messaging, and future integration with dynamic content or admin controls.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PromoBanner = ({ message = 'Welcome to PeoplePay! Enjoy secure, fast payments.', type = 'info' }) => {
  const backgroundColor = {
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    alert: '#F44336',
  }[type] || '#2196F3';

  return (
    <View style={[styles.banner, { backgroundColor }]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 20,
    elevation: 3,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PromoBanner;

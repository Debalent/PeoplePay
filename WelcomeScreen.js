// WelcomeScreen.js
// Developer Note: This file welcomes new users and introduces PeoplePay’s core value.
// Designed for brand clarity, onboarding flow, and future expansion into tutorials or seasonal promos.

import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const WelcomeScreen = ({ onContinue }) => {
  return (
    <View style={styles.container}>
      {/* Logo or Illustration */}
      <Image
        source={require('./assets/welcome.png')}
        style={styles.image}
      />
      {/* Developer Note: Replace with branded illustration or animation */}

      {/* Welcome Message */}
      <Text style={styles.header}>Welcome to PeoplePay</Text>
      <Text style={styles.subtext}>
        Fast, secure, and empowering payments for everyone.
      </Text>

      {/* Continue Button */}
      <Button title="Get Started" onPress={onContinue} />

      {/* Developer Note: Future additions could include carousel, video intro, or referral prompt */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default WelcomeScreen;

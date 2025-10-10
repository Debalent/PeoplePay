// HelpCenter.js
// Developer Note: This file provides help resources and support options for PeoplePay users.
// Modular structure supports FAQs, contact prompts, and future integration with live chat or ticketing systems.

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const HelpCenter = () => {
  const handleContactSupport = () => {
    Alert.alert(
      'Contact Support',
      'Please email support@peoplepay.app or call 1-800-555-HELP for assistance.'
    );
    // Developer Note: This can be replaced with in-app messaging or live chat integration
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help Center</Text>

      {/* FAQ Section */}
      <View style={styles.section}>
        <Text style={styles.subheader}>Frequently Asked Questions</Text>

        <Text style={styles.question}>How do I send money?</Text>
        <Text style={styles.answer}>
          Tap “Send” on the dashboard, enter the recipient and amount, then confirm the transaction.
        </Text>

        <Text style={styles.question}>How do I set up parental controls?</Text>
        <Text style={styles.answer}>
          Go to Settings > Parental Controls to enable spending limits and approval flows.
        </Text>

        <Text style={styles.question}>Is my data secure?</Text>
        <Text style={styles.answer}>
          Yes. PeoplePay uses encrypted storage and secure APIs to protect your information.
        </Text>

        {/* Developer Note: FAQs can be dynamically loaded from backend or CMS for easy updates */}
      </View>

      {/* Contact Support Button */}
      <TouchableOpacity style={styles.button} onPress={handleContactSupport}>
        <Text style={styles.buttonText}>Contact Support</Text>
      </TouchableOpacity>

      {/* Developer Note: Future additions could include chatbot, ticket submission, or help articles */}
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
  },
  section: {
    marginBottom: 30,
  },
  subheader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  answer: {
    fontSize: 14,
    marginTop: 4,
    color: '#333',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HelpCenter;

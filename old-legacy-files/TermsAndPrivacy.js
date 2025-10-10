// TermsAndPrivacy.js
// Developer Note: This file displays PeoplePay's Terms of Service and Privacy Policy.
// Structured for readability, accessibility, and future integration with dynamic legal content.

import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const TermsAndPrivacy = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Terms of Service</Text>
      <Text style={styles.paragraph}>
        By using PeoplePay, you agree to comply with our terms of service. This includes responsible use,
        accurate transaction data, and respect for other users. Unauthorized access, fraud, or misuse may result
        in suspension or legal action.
      </Text>

      {/* Developer Note: Terms can be dynamically loaded from backend or CMS for legal updates */}

      <Text style={styles.header}>Privacy Policy</Text>
      <Text style={styles.paragraph}>
        PeoplePay values your privacy. We collect minimal personal data to enable secure transactions and improve
        user experience. Your information is never sold and is protected using industry-standard encryption.
      </Text>

      {/* Developer Note: Privacy content can be localized or expanded based on jurisdiction */}

      <View style={styles.footer}>
        <Text style={styles.footerText}>Last updated: September 30, 2025</Text>
        {/* Developer Note: Timestamp can be auto-updated when terms are revised */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
    color: '#333',
  },
  footer: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  },
});

export default TermsAndPrivacy;

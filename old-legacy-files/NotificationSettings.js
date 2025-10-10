// NotificationSettings.js
// Developer Note: This file manages user preferences for in-app and external notifications.
// Designed for modular control, accessibility, and future backend sync with user profile.

import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const NotificationSettings = () => {
  const [transactionAlerts, setTransactionAlerts] = useState(true);
  const [promoUpdates, setPromoUpdates] = useState(false);
  const [securityAlerts, setSecurityAlerts] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notification Preferences</Text>

      {/* Transaction Alerts */}
      <View style={styles.row}>
        <Text style={styles.label}>Transaction Alerts</Text>
        <Switch
          value={transactionAlerts}
          onValueChange={setTransactionAlerts}
        />
        {/* Developer Note: Controls push or in-app alerts for send/receive activity */}
      </View>

      {/* Promo Updates */}
      <View style={styles.row}>
        <Text style={styles.label}>Promotional Updates</Text>
        <Switch
          value={promoUpdates}
          onValueChange={setPromoUpdates}
        />
        {/* Developer Note: Can be used for seasonal offers, referral bonuses, or new features */}
      </View>

      {/* Security Alerts */}
      <View style={styles.row}>
        <Text style={styles.label}>Security Notifications</Text>
        <Switch
          value={securityAlerts}
          onValueChange={setSecurityAlerts}
        />
        {/* Developer Note: Includes login alerts, password changes, and suspicious activity */}
      </View>
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
  row: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});

export default NotificationSettings;

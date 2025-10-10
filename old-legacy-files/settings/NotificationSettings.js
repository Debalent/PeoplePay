// NotificationSettings.js
// Developer Note: This file lets users toggle notification preferences.
// Designed for modular reuse, jurisdictional logic, and future expansion into SMS, push, or onboarding flows.

import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const NotificationSettings = ({ initialSettings, onUpdate }) => {
  const [emailEnabled, setEmailEnabled] = useState(initialSettings.email);
  const [pushEnabled, setPushEnabled] = useState(initialSettings.push);
  const [smsEnabled, setSmsEnabled] = useState(initialSettings.sms);

  const handleToggle = (type, value) => {
    if (type === 'email') setEmailEnabled(value);
    if (type === 'push') setPushEnabled(value);
    if (type === 'sms') setSmsEnabled(value);

    onUpdate({ email: emailEnabled, push: pushEnabled, sms: smsEnabled });
    // Developer Note: This triggers backend sync and can be expanded into jurisdictional logic or onboarding flows
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notification Settings</Text>

      {/* Email Notifications */}
      <View style={styles.row}>
        <Text style={styles.label}>Email Alerts</Text>
        <Switch
          value={emailEnabled}
          onValueChange={(value) => handleToggle('email', value)}
        />
      </View>

      {/* Push Notifications */}
      <View style={styles.row}>
        <Text style={styles.label}>Push Notifications</Text>
        <Switch
          value={pushEnabled}
          onValueChange={(value) => handleToggle('push', value)}
        />
      </View>

      {/* SMS Notifications */}
      <View style={styles.row}>
        <Text style={styles.label}>SMS Messages</Text>
        <Switch
          value={smsEnabled}
          onValueChange={(value) => handleToggle('sms', value)}
        />
      </View>

      {/* Developer Note: Future additions could include jurisdiction filters, onboarding triggers, or trust overlays */}
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

export default NotificationSettings;

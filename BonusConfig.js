// BonusConfig.js
// Developer Note: This file allows admins to configure referral and promo bonuses.
// Designed for modular campaign logic, backend syncing, and future expansion into dynamic tiers or time-based triggers.

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch } from 'react-native';

const BonusConfig = ({ onSave }) => {
  const [referralBonus, setReferralBonus] = useState('5.00');
  const [promoActive, setPromoActive] = useState(false);
  const [promoMessage, setPromoMessage] = useState('');

  const handleSave = () => {
    const config = {
      referralBonus: parseFloat(referralBonus),
      promoActive,
      promoMessage,
    };
    onSave(config);
    // Developer Note: This triggers backend update and can be tied to campaign logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bonus Configuration</Text>

      {/* Referral Bonus Input */}
      <Text style={styles.label}>Referral Bonus ($)</Text>
      <TextInput
        style={styles.input}
        value={referralBonus}
        onChangeText={setReferralBonus}
        keyboardType="numeric"
      />

      {/* Promo Toggle */}
      <View style={styles.row}>
        <Text style={styles.label}>Activate Promo</Text>
        <Switch value={promoActive} onValueChange={setPromoActive} />
      </View>

      {/* Promo Message */}
      <TextInput
        style={styles.input}
        value={promoMessage}
        onChangeText={setPromoMessage}
        placeholder="Promo Message (optional)"
      />

      {/* Save Button */}
      <Button title="Save Bonus Settings" onPress={handleSave} />

      {/* Developer Note: Future additions could include expiration dates, user tiers, or A/B testing */}
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
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
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
});

export default BonusConfig;

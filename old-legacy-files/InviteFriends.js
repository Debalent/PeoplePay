// InviteFriends.js
// Developer Note: This file handles user referrals and tracks bonus rewards.
// Bonus amount is configurable by the owner after MVP purchase—currently set as a placeholder.

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Clipboard, Alert } from 'react-native';

// Placeholder bonus amount (owner can configure this post-MVP)
const BONUS_PER_REFERRAL = 5.00; // Developer Note: Replace with dynamic value from backend or admin panel

const InviteFriends = () => {
  const [referralCount, setReferralCount] = useState(0); // Tracks successful referrals
  const [referralLink] = useState('https://peoplepay.app/invite?ref=USER123'); // Sample referral link

  const handleCopyLink = () => {
    Clipboard.setString(referralLink);
    Alert.alert('Link Copied', 'Your invite link has been copied to clipboard.');
    // Developer Note: This can be expanded to share via SMS, email, or social media
  };

  const handleSimulateReferral = () => {
    // Simulates a successful referral (for demo/testing purposes)
    setReferralCount(referralCount + 1);
    // Developer Note: In production, this should be triggered by backend confirmation
  };

  const totalBonus = referralCount * BONUS_PER_REFERRAL;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Invite Friends</Text>
      <Text style={styles.subtext}>Share your link and earn bonuses for each successful referral.</Text>

      {/* Referral Link */}
      <View style={styles.linkBox}>
        <Text style={styles.link}>{referralLink}</Text>
        <Button title="Copy Link" onPress={handleCopyLink} />
      </View>

      {/* Referral Bonus Tracker */}
      <View style={styles.tracker}>
        <Text style={styles.label}>Referrals: {referralCount}</Text>
        <Text style={styles.label}>Bonus Earned: ${totalBonus.toFixed(2)}</Text>
      </View>

      {/* Simulate Referral Button (for testing/demo) */}
      <Button title="Simulate Referral" onPress={handleSimulateReferral} />

      {/* Developer Note: Owner can configure BONUS_PER_REFERRAL via admin dashboard or backend API */}
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
    marginBottom: 10,
  },
  subtext: {
    fontSize: 14,
    marginBottom: 20,
  },
  linkBox: {
    marginBottom: 20,
  },
  link: {
    fontSize: 14,
    marginBottom: 8,
    color: '#2196F3',
  },
  tracker: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default InviteFriends;

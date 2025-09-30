// TutorialCarousel.js
// Developer Note: This file introduces PeoplePay’s core features via swipeable cards.
// Designed for onboarding clarity, brand polish, and future expansion into animation or video tutorials.

import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Send Money Instantly',
    description: 'Transfer funds to friends and family in seconds.',
    image: require('./assets/send.png'),
  },
  {
    key: '2',
    title: 'Track Transactions',
    description: 'View your payment history and stay organized.',
    image: require('./assets/history.png'),
  },
  {
    key: '3',
    title: 'Set Spending Limits',
    description: 'Control spending with parental controls and alerts.',
    image: require('./assets/limits.png'),
  },
];

const TutorialCarousel = () => {
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={slides}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 160,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default TutorialCarousel;

// ErrorBoundary.js
// Developer Note: This file provides global error handling for PeoplePay.
// It catches rendering errors and displays a fallback message to preserve user experience.
// Designed for resilience, debugging, and future expansion into logging or recovery flows.

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Lifecycle method to catch errors in child components
  static getDerivedStateFromError(error) {
    return { hasError: true };
    // Developer Note: This triggers fallback UI when a rendering error occurs
  }

  // Optional method to log error details
  componentDidCatch(error, info) {
    console.log('ErrorBoundary caught an error:', error, info);
    // Developer Note: Can be connected to external logging service or analytics
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Something went wrong.</Text>
          <Text style={styles.message}>Please restart the app or contact support.</Text>
          {/* Developer Note: Fallback UI can be customized per screen or error type */}
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#F44336',
  },
  message: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default ErrorBoundary;

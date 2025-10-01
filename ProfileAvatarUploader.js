// ProfileAvatarUploader.js
// Developer Note: This file allows users to upload or change their profile picture.
// Designed for modular reuse, onboarding triggers, and future expansion into cropping or camera capture.

import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileAvatarUploader = ({ avatarUrl, onUpload }) => {
  const [preview, setPreview] = useState(avatarUrl);

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.cancelled) {
      setPreview(result.uri);
      onUpload(result.uri);
      // Developer Note: This triggers backend upload and can be expanded into cropping or camera capture
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Update Profile Picture</Text>

      {/* Avatar Preview */}
      <Image
        source={{ uri: preview }}
        style={styles.avatar}
      />

      {/* Upload Button */}
      <Button title="Choose New Photo" onPress={handlePickImage} />

      {/* Developer Note: Future additions could include cropping, camera capture, or branded overlays */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    backgroundColor: '#eee',
  },
});

export default ProfileAvatarUploader;

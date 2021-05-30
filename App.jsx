import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GenreListScreen from './src/screens/GenreListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <GenreListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(215,219,255,0.25)',
  },
});

import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from 'react-native-elements'

import GenreDetail from '../components/GenreDetailComponent';

export default function GenreDetailListScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>
        <GenreDetail />
      </View>
      <View style={styles.list}>
        <GenreDetail />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  list: {
    marginBottom: 56
  }
})

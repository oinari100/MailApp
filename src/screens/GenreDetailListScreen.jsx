import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import SchoolContainer from '../containers/SchoolContainer';

export default function GenreDetailListScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  background: {
    height: '100%',
    backgroundColor: 'rgba(215,219,255,0.25)',
  },
  list: {
    backgroundColor: '#ffffff',
  },
  title: {
    backgroundColor: 'rgba(215,219,255,0.25)',
    color: '#6A94FF',
    padding: 5,
    borderWidth: 1,
    borderColor: '#BEBEBE',
  },
  content: {
    backgroundColor: '#ffffff',
    color: '#2B4CBF',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    fontSize: 18,
    padding: 28, 
  },
});
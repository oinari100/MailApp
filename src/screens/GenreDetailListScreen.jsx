import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from 'react-native-elements'

import GenreDetail from '../components/GenreDetailComponent';
import SchoolContainer from '../containers/SchoolContainer';

export default function GenreDetailListScreen({ navigation, route }) {

  return (
    <>
      <View style={styles.line} />
      <ScrollView style={styles.container}>
        {SchoolContainer.map((item, i) => (
          <View style={styles.list}>
            <GenreDetail genre={item}/>
          </View>
          ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  list: {
    marginBottom: 56
  },
  line: {
    height: 10,
    backgroundColor: '#6A94FF'
  },
})

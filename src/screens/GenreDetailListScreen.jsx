import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from 'react-native-elements'

import GenreDetail from '../components/GenreDetailComponent';
import SchoolContainer from '../containers/SchoolContainer';
import InternContainer from '../containers/InternContainer';
import JobHuntingContainer from '../containers/JobHuntingContainer';
import CompanyContainer from '../containers/CompanyContainer';
import BusinessContainer from '../containers/BusinessContainer';

export default function GenreDetailListScreen({ navigation, route }) {

  const genre = route.params.genre
  
  const isGenre = () => {
    if (genre == 'school') {
      return SchoolContainer
    }
    else if (genre == 'intern') {
      return InternContainer
    }
    else if (genre == 'bill') {
      return JobHuntingContainer
    }
    else if (genre == 'business') {
      return CompanyContainer
    }
    else if (genre == 'company') {
      return BusinessContainer
    }
    else {
      return // 内部ストレージアクセス
    }
  }

  return (
    <>
      <View style={styles.line} />
      <ScrollView style={styles.container}>
        {isGenre().map((item, i) => (
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

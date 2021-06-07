import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { Divider } from 'react-native-elements';

export default function GenreDetailComponent(props) {
  const { name, text, color } = props;

  return (
    <View style={styles.container}>
      <View style={styles.genre}>
        <Text style={styles.genreText}>学校を体調不良で休む</Text>
      </View>
      <View>
        <View style={styles.subject}>
          <Text style={styles.subjectLabel}>件名：</Text>
          <TextInput style={styles.subjectText}></TextInput>
        </View>
        <Divider style={styles.divider}/>
        <ScrollView style={styles.letterBody}>
          <TextInput></TextInput>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 68,
    borderWidth: 0.5,
    borderColor: '#D8D8D8',
  },
  genre: {
    backgroundColor: '#6A94FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genreText: {
    color: '#ffffff',
    padding: 10,
    fontSize: 16,
    letterSpacing: 2
  },
  subject: {
    flexDirection: 'row'
  },
  subjectLabel: {
    color: '#979797',
    padding: 10,
    fontSize: 16
  },
  subjectText: {
    fontSize: 16
  },
  divider: {
    marginRight: 12,
    marginLeft: 12
  },
  letterBody: {
    padding: 20,
    fontSize: 16
  }
})
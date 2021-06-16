import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Divider } from 'react-native-elements';

export default function GenreDetailComponent(props) {
  const { mailTitle, subject, mailContent } = props;

  return (
    <View style={styles.container}>
      <View style={styles.genre}>
        <Text style={styles.genreText}>{mailTitle}</Text>
      </View>
      <View>
        <View style={styles.subject}>
          <Text style={styles.subjectLabel}>件名：</Text>
          <TextInput style={styles.subjectText}>{subject}</TextInput>
        </View>
        <Divider style={styles.divider}/>
        <TextInput style={styles.letterBody} multiline={true} selectionColor='#E7EBFF'>{mailContent}</TextInput>
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
    fontSize: 18
  },
  subjectText: {
    fontSize: 16
  },
  divider: {
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 16
  },
  letterBody: {
    padding: 24,
    fontSize: 16,
  }
})

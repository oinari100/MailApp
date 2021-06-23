import React from 'react';
import { StyleSheet, View } from 'react-native';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage'

import Mail from '../components/MailComponent';
import Button from '../components/ButtonComponent';

import SchoolDetailContainer from '../containers/details/SchoolDetailContainer';

export default function MailScreen({ route }) {

  const genreDetail = route.params.genreDetail

  const storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 2,
    enableCache: true,
  })

  const isSubject = SchoolDetailContainer.map(function(item){
    if (item['title'] === genreDetail){
      return item['subject'];
    }
  });

  const isMailContent = SchoolDetailContainer.map(function(item){
    if (item['title'] === genreDetail){
      return item['mailContent'];
    }
  });

  return (
    <>
      <View style={styles.line} />
      <View style={styles.container}> 
        <Mail 
          mailTitle={genreDetail} 
          subject={isSubject} 
          mailContent={isMailContent}
          storage={storage}
        />
      </View>
      <View style={styles.buttonCopy}>
        <Button name='clip' text='コピー' color='#4CB8F5' storage={storage}/>
      </View>
      <View style={styles.buttonMail}>
        <Button name='mail' text='メール' color='#64DFDF'/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FF',
  },
  line: {
    height: 10,
    backgroundColor: '#6A94FF'
  },
  buttonCopy: {
    position: 'absolute',
    right: 128,
    bottom: 40
  },
  buttonMail: {
    position: 'absolute',
    right: 40,
    bottom: 40
  }
});
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import CustomIcon from '../components/CustomIconComponent';

export default function ContactScreen() {

  return (
    <>
      <View style={styles.line} />
      <View style={styles.container}>
        <CustomIcon name='send' size={80} color='#2B4CBF'/>
        <Text>お問い合わせ・ご意見</Text>
        <View>
          <Text>お名前</Text>
          <TextInput />
          <Text>メールアドレス</Text>
          <TextInput />
          <Text>内容</Text>
          <TextInput />
          <Text>送信</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FF',
    alignItems: 'center',
  },
  line: {
    height: 10,
    backgroundColor: '#6A94FF'
  },
});
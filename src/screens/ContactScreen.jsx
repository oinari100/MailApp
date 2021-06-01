import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import AppBar from '../components/AppBarComponent';

export default function ContactScreen() {

  return (
    <View>
      <AppBar />
      <Text>お問い合わせ・ご意見<Text>
      <View>
        <View>
          <Text>お名前<Text>
          <TextInput
            autoCapitalize='none'
          >
          </TextInput>
        </View>
        <View>
          <Text>メールアドレス<Text>
          <TextInput
            autoCapitalize='none'
            keyboardType='email-address'
          >
          </TextInput>
        </View>
        <View>
          <Text>内容<Text>
          <TextInput
            autoCapitalize='none'
          >
          </TextInput>
        </View>
        <View>ボタン</View>
      </View>
    </View>
  );
}
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import AppBar from '../components/AppBarComponent';

export default function ContactScreen() {

  return (
    <View>
      <AppBar />
      <Text>���₢���킹�E���ӌ�<Text>
      <View>
        <View>
          <Text>�����O<Text>
          <TextInput
            autoCapitalize='none'
          >
          </TextInput>
        </View>
        <View>
          <Text>���[���A�h���X<Text>
          <TextInput
            autoCapitalize='none'
            keyboardType='email-address'
          >
          </TextInput>
        </View>
        <View>
          <Text>���e<Text>
          <TextInput
            autoCapitalize='none'
          >
          </TextInput>
        </View>
        <View>�{�^��</View>
      </View>
    </View>
  );
}
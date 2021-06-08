import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input, Divider } from 'react-native-elements';

export default function WellcomeScreeen() {

  const formInput = [
    {label:'お名前（姓）', placeholder:'田中', iconName:'person'},
    {label:'メールアドレス', placeholder:'email@address.com', iconName:'mail'},
    {label:'パスワード', placeholder:'Password', iconName:'lock'}
  ]

  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
});
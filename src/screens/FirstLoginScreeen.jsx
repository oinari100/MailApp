import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input, Divider } from 'react-native-elements';

export default function FirstLoginScreeen() {

  const formInput = [
    {label:'お名前（姓）', placeholder:'田中', iconName:'person'},
    {label:'メールアドレス', placeholder:'email@address.com', iconName:'mail'},
    {label:'パスワード', placeholder:'Password', iconName:'lock'}
  ]

  return (
    <View style={styles.container}>
      <Image source={require('../../assets//img/icon.svg')}/>
      <Text>会員登録することで、メールの</Text>
      <Text>内容が会員情報で作成されます。</Text>
      <View style={styles.input}>
      {formInput.map((item, i) => (
        <View style={styles.inputContent}>
          <Text style={styles.inputTitle}>{item.label}</Text>
          <Input
            placeholder={item.placeholder}
            leftIcon={
            <Icon
              name={item.iconName}
              size={24}
              color='#2B4CBF'
            />}
          />
          </View>
        ))}
        <View style={styles.inputButton}>
          <Text style={styles.inputButtonText}>登 録</Text>
        </View>
      </View>
      <Divider style={styles.divider}/>
      <View style={styles.skip}>
        <Text style={styles.skipText}>スキップする</Text>
        <Icon 
          name='chevron-right'
          size={24}
          color='#2B4CBF'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  input: {
    marginTop: 32,
    width: '88%',
    backgroundColor: '#F5F6FF',
    padding: 24,
    borderRadius: 10,
  },
  inputContent: {
    marginBottom: 8
  },
  inputTitle: {
    color: '#2B4CBF',
    fontWeight: 'bold',
    fontSize: 16
  },
  inputButton: {
    alignItems: 'center',
    backgroundColor: '#6A94FF',
    marginRight: 120,
    marginLeft: 120,
    borderRadius: 40,
  },
  inputButtonText: {
    color: '#ffffff',
    padding: 12,
    fontSize: 16,
    fontWeight: 'bold'
  },
  divider: {
    marginTop: 30,
    marginBottom: 30,
    marginRight: 12,
    marginLeft: 12
  },
  skip: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skipText: {
    color: '#2B4CBF',
    fontWeight: 'bold',
    fontSize: 16
  }
});
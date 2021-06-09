import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';

export default function SignUpComponent() {

  const [name, setName] = useState('')
  const [info, setInfo] = useState('')

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
    >
    <View style={styles.container}>
      <Image source={require('../../assets/img/user.png')} style={styles.image} resizeMode='contain'/>
      <View style={styles.content}>
        <Text style={styles.subText}>下記情報を入力してください。</Text>
        <View style={styles.main}>
        <Input
          type="text"
          containerStyle={styles.input}
          placeholder="鈴木"
          label="お名前（姓）"
          onChangeText={(text) => { setName(text); }}
        />
        <Input
          type="text"
          containerStyle={styles.input}
          placeholder="株式会社〇〇 ××課"
          label="学校名 学部名 / 会社名 部署名"
          onChangeText={(text) => { setInfo(text); }}
        />
        </View>
      </View>
    </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    marginTop: 50,
    width: 200,
  },
  content: {
    marginTop: -120,
    alignItems: 'center',
  },
  main: {
    width: 280,
    marginTop: 40
  },
  input: {
    marginTop: 10
  },
  subText: {
    fontSize: 18,
    lineHeight: 28
  }
})
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function WellcomeComponent() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/img/icon.png')} style={styles.image} resizeMode='contain'/>
      <View style={styles.content}>
        <View style={styles.main}>
          <Text style={styles.mainText}>Wellcome!</Text>
        </View>
        <Text style={styles.subText}>Example Email は日常で使用できる</Text>
        <Text style={styles.subText}>メールの例文をまとめたアプリです。</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    marginTop: 50,
    width: 180,
  },
  content: {
    marginTop: -80,
    alignItems: 'center',
  },
  main: {
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 0,
    shadowOpacity: 1,
  },
  mainText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2B4CBF',
    marginBottom: 60,
    letterSpacing: 1
  },
  subText: {
    fontSize: 18,
    lineHeight: 28
  }
})
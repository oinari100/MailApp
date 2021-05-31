import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

import CustomIcon from './CustomIconComponent';

export default function AppBar() {
  return (
    <>
      <View style={styles.appbar}>
        <View style={styles.appbarContent}>
          <MaterialIcons name="keyboard-arrow-left" size={36} color="white" />
          <Text style={styles.appbarContentText}>戻る</Text>
        </View>
        <View style={styles.appbarContent}>
          <CustomIcon name="search" size={28} color={"#ffffff"} style={styles.appbarContentImg}/>
          <CustomIcon name="setting" size={28} color={"#ffffff"}/>
        </View>
      </View>
      <View style={styles.appbarLine} />
    </>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 120,
    backgroundColor: '#2B4CBF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appbarContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 16,
    paddingRight: 20,
    paddingLeft: 10,
  },
  appbarContentText: {
    color: '#ffffff',
    fontSize: 20,
    paddingBottom: 8,
  },
  appbarContentImg: {
    paddingRight: 20,
  },
  appbarLine: {
    height: 10,
    backgroundColor: '#6A94FF',
  },
});

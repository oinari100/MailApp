import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import CustomIcon from './CustomIconComponent';

export default function ButtonComponent(props) {
  const { name, text, color } = props;

  const isPropsName = () => {
    if (name === 'clip') {
      Alert.alert('コピーしました。');
    }
  }

  return (
    <TouchableOpacity　style={{
      backgroundColor: color,
      width: 72,
      height: 72,
      borderRadius: 36,
      shadowColor: '#000000',
      shadowOffset: {width: 0, height: 8 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={isPropsName}
    >
      <View style={{
        marginTop: 6,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CustomIcon name={name} size={26} color='#ffffff' />
        <Text style={{
          color: '#ffffff',
          fontSize: 12,
          fontWeight: 'bold',
          marginTop: 6
        }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
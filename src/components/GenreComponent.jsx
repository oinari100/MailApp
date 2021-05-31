import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import CustomIcon from './CustomIconComponent';

export default function Genre(props) {
  const { name, text, color } = props;
  return (
    <TouchableOpacity style={styles.genre} onPress={() => {Alert.alert("クリック")}}>
      <View style={styles.genreContent}>
        <CustomIcon name={name} size={46} color={color} />
        <Text style={styles.genreText}>{text}</Text>
      </View>
      <CustomIcon name="arrow" size={24} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  genre: {
    backgroundColor: '#ffffff',
    height: 80,
    borderWidth: 1,
    borderColor: '#BEBEBE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
  },
  genreContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  genreText: {
    fontSize: 20,
    color: '#2B4CBF',
    paddingLeft: 20,
  }
})
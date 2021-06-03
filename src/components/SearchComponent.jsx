import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

//import CustomIcon from './CustomIconComponent';
import { SearchBar } from 'react-native-elements';

export default function SearchComponent() {
  const [ searchValue, setSearchValue ] = useState('');
  return (
      <SearchBar
        containerStyle={styles.inputSearch}
        inputContainerStyle={styles.inputContainer}
        value={searchValue}
        onChangeText={(text) => { setSearchValue(text) }}
        placeholder="検 索"
        round="true"
        lightTheme="true"
        platform="ios"
        cancelButtonTitle=""
        autoCapitalize="none"
      />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  inputContainer: {
    backgroundColor: '#F1F1F1'
  }
});
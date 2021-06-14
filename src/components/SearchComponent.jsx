import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

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
        placeholder="検索"
        round="true"
        lightTheme="true"
        platform="ios"
        cancelButtonTitle=""
      />
  );
}

const styles = StyleSheet.create({
  inputSearch: {
    backgroundColor: '#F5F6FF'
  },
  inputContainer: {
    backgroundColor: '#ffffff'
  }
});
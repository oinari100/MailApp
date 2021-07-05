import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { SearchBar } from 'react-native-elements';

import Genre from '../components/GenreComponent';
import Modal from '../components/ModalComponent';

export default function GenreListScreen() {
  const genreContent = [
    {name: "school", text: "学校", color:"#2B4CBF"},
    {name: "business", text: "インターン / OB訪問", color:"#2B4CBF"},
    {name: "bill", text: "就職 / 転職活動", color:"#2B4CBF"},
    {name: "pc", text: "会社 / ビジネス", color:"#2B4CBF"},
    {name: "suits", text: "冠婚葬祭", color:"#2B4CBF"},
    {name: "file", text: "その他", color:"#2B4CBF"},
  ]

  const [ searchValue, setSearchValue ] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.search}>
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
      </View>
      <View style={{ display: searchValue.length == 0 ? '' : 'none' }}>
        <Genre />
      </View>
      <View style={{ display: searchValue.length == 0 ? 'none' : '' }}>
        <Text>検索結果</Text>
      </View>
      <Modal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  line: {
    height: 10,
    backgroundColor: '#6A94FF'
  },
  search: {
    padding: 10,
    backgroundColor: '#F5F6FF'
  },
  inputSearch: {
    backgroundColor: '#F5F6FF'
  },
  inputContainer: {
    backgroundColor: '#ffffff'
  }
});
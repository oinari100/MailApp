import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Genre from '../components/GenreComponent';
import Search from '../components/SearchComponent';

export default function GenreListScreen() {
  const genreContent = [
    {name: "school", text: "学校", color:"#2B4CBF"},
    {name: "business", text: "インターン / OB訪問", color:"#2B4CBF"},
    {name: "bill", text: "就職 / 転職活動", color:"#2B4CBF"},
    {name: "pc", text: "会社 / ビジネス", color:"#2B4CBF"},
    {name: "suits", text: "冠婚葬祭", color:"#2B4CBF"},
    {name: "file", text: "その他", color:"#2B4CBF"},
  ]

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.background} />
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
    marginTop: 10
  },
  background: {
    height: '100%',
    backgroundColor: '#ffffff'
  },
});
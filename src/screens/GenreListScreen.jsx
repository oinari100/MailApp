import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppBar from '../components/AppBar';
import Genre from '../components/Genre';

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
    <View>
      <AppBar />
      { React.Children.toArray(genreContent.map((v) => <Genre name={v.name} text={v.text} color={v.color}/>))}
    </View>
  );
}
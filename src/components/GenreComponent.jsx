import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from 'react-native-elements'

import CustomIcon from './CustomIconComponent';

export default function GenreComponent(props) {
  const { name, text, color } = props;
  const navigation = useNavigation();
  const list = [
    {
      title: '学 校',
      subtitle: '休みや遅刻、部活動など',
      icon: 'school',
      color: '#64DFDF'
    },
    {
      title: 'インターン',
      subtitle: 'OB / OG訪問、日程調整など',
      icon: 'intern',
      color: '#56CFE1'
    },
    {
      title: '就職 / 転職',
      subtitle: '面接、企業への質問など',
      icon: 'bill',
      color: '#48BFE3'
    },
    {
      title: '会社 / ビジネス',
      subtitle: '休みや遅刻、アポイントなど',
      icon: 'business',
      color: '#4EA8DE'
    },
    {
      title: 'その他',
      subtitle: '冠婚葬祭やお祝い事など',
      icon: 'other',
      color: '#61A0FF'
    },
    {
      title: 'オリジナル',
      subtitle: 'ご自身の定型文を新規作成',
      icon: 'original',
      color: '#AFAEB0'
    },
  ];

  return (
    <TouchableOpacity
      style={styles.list}
    >
      {list.map((item, i) => (
        <ListItem key={i}
          style={styles.listItem}
          onPress={() => { navigation.navigate('GenreDetailList',{ genre: item.icon})}}
        >
          <CustomIcon name={item.icon} size={40} color={item.color} />
          <ListItem.Content>
            <ListItem.Title style={styles.listTitle}>{item.title}</ListItem.Title>
            <ListItem.Subtitle style={styles.listSubTitle}>{item.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    <Text onPress={() => { navigation.navigate('Member')}}>test</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10
  },
  listItem: {
    marginTop: 12
  },
  listTitle: {
    fontSize: 18
  },
  listSubTitle: {
    fontSize: 14,
    color: '#9D9D9D',
    marginTop: 4
  }
})
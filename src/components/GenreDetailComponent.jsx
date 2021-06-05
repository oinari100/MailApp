import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from 'react-native-elements'

import SchoolContainer from '../containers/SchoolContainer';

export default function GenreDetailComponent(props) {
  const { name, text, color } = props;
  const navigation = useNavigation();
  const list = {
    title:"学校を休む",
    content:[
      "学校を体調不良で休む",
      "学校を私用で休む",
      "学校を忌引きで休む"
    ]
  };

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={styles.title}
        >
          {list.title}
        </Text>
      </View>
      <View style={styles.list}>
        {list.content.map((item, i) => (
          <ListItem 
            key={i}
            onPress={() => { navigation.navigate('MailCreate')}}
            style={styles.listItem}
            bottomDivider
          >
            <ListItem.Content>
              <ListItem.Title
                style={styles.listItemTitle}
              >
                {item}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron 
              color='#2B4CBF'
            />
          </ListItem>
        ))}
      </View>
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
  title: {
    backgroundColor: '#F5F6FF',
    color: '#6A94FF',
    padding: 8,
  },
  listItem: {
    paddingTop: 24,
    paddingLeft: 32,
    paddingRight: 32,
  },
  listItemTitle: {
    color: '#2B4CBF'
  },
});
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListItem } from 'react-native-elements'

export default function GenreDetailComponent(props) {
  const { genre } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={styles.title}
        >
          {genre.title}
        </Text>
      </View>
      <View style={styles.list}>
        {genre.list.map((item, i) => (
          <ListItem 
            key={i}
            onPress={() => { navigation.navigate('MailCreate', { genreDetail: item})}}
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
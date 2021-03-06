import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GenreListfrom from '../screens/GenreListScreen';
import GenreDetailList from '../screens/GenreDetailListScreen';
import MailCreate from '../screens/MailCreateScreen';
import Contact from '../screens/ContactScreen';
import MemberScreen from '../screens/MemberScreen';
import TermsOfUse from '../screens/TermsOfUseScreen';

const Stack = createStackNavigator();

export default function NavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GenreList"
        screenOptions={{
          headerStyle: styles.appbar,
          headerTitle: '',
          headerTintColor: '#ffffff',
          headerBackTitle: '戻る',
        }}
      >
        <Stack.Screen name="GenreList" component={GenreListfrom} />
        <Stack.Screen name="GenreDetailList" component={GenreDetailList} />
        <Stack.Screen name="MailCreate" component={MailCreate} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Member" component={MemberScreen} />
        <Stack.Screen name="TermsOfUse" component={TermsOfUse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#2B4CBF',
  }
});
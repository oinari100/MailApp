import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GenreListScreen from '../screens/GenreListScreen';
import GenreDetailListScreen from '../screens/GenreDetailListScreen';

const Stack = createStackNavigator();

export default function NavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GenreListScreen"
        screenOptions={{
          headerStyle: styles.appbar,
          headerTitle: '',
          headerTintColor: '#ffffff',
          headerBackTitle: '戻る',
        }}
      >
        <Stack.Screen name="GenreList" component={GenreListScreen} />
        <Stack.Screen name="GenreDetailListScreen" component={GenreDetailListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#2B4CBF',
  }
});
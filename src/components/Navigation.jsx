import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GenreListScreen from '../screens/GenreListScreen';
import GenreDetailListScreen from '../screens/GenreDetailListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GenreListScreen"
        screenOptions={{
          headerStyle: { height: 120, backgroundColor: '#2B4CBF' },
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

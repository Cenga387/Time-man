import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigatorStack from './AppNavigator';

export default function App() {
  return <NavigationContainer>{<AppNavigatorStack/>}</NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

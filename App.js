import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './screens/AppNavigator';

import { createAppContainer } from 'react-navigation';


const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

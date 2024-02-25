import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigatorStack from './AppNavigator';
import {useEffect, useState} from 'react';

export default function App() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return <NavigationContainer>{<AppNavigatorStack/>}</NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

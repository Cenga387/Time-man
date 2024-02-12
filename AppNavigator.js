import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './authScreens/SignUpScreen';
import LoginScreen from './authScreens/LoginScreen';
import MainContainer from './navigation/MainContainer';
import TaskDetailsScreen from './navigation/screens/TaskCards/TaskDetailsScreen';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
}

const AppNavigator = createStackNavigator();

function AppNavigatorStack() {
  return (
    <AppNavigator.Navigator>
      <AppNavigator.Screen
        name="AuthStack"
        component={AuthStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <AppNavigator.Screen
        name="MainContainer"
        component={MainContainer}
        options={{
          headerShown: false,
        }}
      />
      <AppNavigator.Screen
        name="Task Details"
        component={TaskDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </AppNavigator.Navigator>
  );
}

export default AppNavigatorStack;

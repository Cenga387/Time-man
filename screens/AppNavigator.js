import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import BottomNavBar from './BottomNavBar'
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
    </AuthStack.Navigator>
  );
}

// Create a bottom tab navigator for the screens with bottom navigation
const Tab = createStackNavigator();

function MainStackNavigator() {
  return (
    <Tab.Navigator
      // tabBar={(props) => <BottomNavBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      {/* <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="AddTask" component={AddTaskScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
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
        name="MainStackNavigator"
        component={MainStackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </AppNavigator.Navigator>
  );
}

export default AppNavigatorStack;
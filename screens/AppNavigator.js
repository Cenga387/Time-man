import { createStackNavigator } from 'react-navigation-stack';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';

const AppNavigator = createStackNavigator(
  {
    Login:LoginScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: 'Login', 
    defaultNavigationOptions: {
      headerShown: false,
    }
  }
);

export default AppNavigator;
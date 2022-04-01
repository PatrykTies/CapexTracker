import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// Screens
import Login from '../screens/AuthScreens/Login';
import ResetPassword from '../screens/AuthScreens/ResetPassword';
import Signup from '../screens/AuthScreens/Signup';

type AuthParamList = {
  Login: undefined;
  ResetPassword: undefined;
  Signup: undefined;
};

export interface AuthNavigationProps<RouteName extends keyof AuthParamList> {
  navigation: NativeStackScreenProps<AuthParamList, RouteName>;
  route: RouteProp<AuthParamList, RouteName>;
}

const AuthenticationStack = createNativeStackNavigator<AuthParamList>();

const LoggedOutScreens = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen
        name="ResetPassword"
        component={ResetPassword}
      />
      <AuthenticationStack.Screen name="Signup" component={Signup} />
    </AuthenticationStack.Navigator>
  );
};

export default LoggedOutScreens;

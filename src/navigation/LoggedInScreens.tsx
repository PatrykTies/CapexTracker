import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Home from '../screens/UserScreens/Home';

type RootStackParamList = {
  Home: undefined;
};

const MainStack = createNativeStackNavigator<RootStackParamList>();

const LoggedInScreens = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};

export default LoggedInScreens;

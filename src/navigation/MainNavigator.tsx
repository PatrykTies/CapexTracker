import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminHome from '../screens/AdminScreens/Home';

const MainStack = createNativeStackNavigator();

const AdminNavigator = (props: any) => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="AdminHome" component={AdminHome} />
    </MainStack.Navigator>
  );
};

export default AdminNavigator;

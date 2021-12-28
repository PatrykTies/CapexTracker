import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExpandableCalendar from '../screens/UserScreens/Home';
const MainStack = createNativeStackNavigator();

const AdminNavigator = (props: any) => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="UserHome" component={ExpandableCalendar} />
    </MainStack.Navigator>
  );
};

export default AdminNavigator;

import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import LoggedInScreens from './LoggedInScreens';
import LoggedOutScreens from './LoggedOutScreens';

const AppScreensNavigation = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <LoggedInScreens /> : <LoggedOutScreens />}
    </NavigationContainer>
  );
};

export default AppScreensNavigation;

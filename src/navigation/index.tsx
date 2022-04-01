import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import LoggedInScreens from './LoggedInScreens';
import LoggedOutScreens from './LoggedOutScreens';

type AuthState = {
  auth: {
    isAuthenticated: boolean;
  };
};

const AppScreensNavigation = () => {
  const isAuthenticated = useSelector<AuthState>(
    state => state.auth.isAuthenticated,
  );

  return (
    <NavigationContainer>
      {isAuthenticated ? <LoggedInScreens /> : <LoggedOutScreens />}
    </NavigationContainer>
  );
};

export default AppScreensNavigation;

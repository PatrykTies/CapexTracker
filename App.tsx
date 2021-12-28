import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/theme';

const App = () => {
  const isAuthenticated = true;
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <NavigationContainer>
        {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@shopify/restyle';
import store from './src/redux/store';
import theme from './src/theme';
import AppScreens from './src/navigation';

const App = () => {
  const isAuthenticated = true;
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Provider store={store}>
        <AppScreens />
      </Provider>
    </ThemeProvider>
  );
};

export default App;

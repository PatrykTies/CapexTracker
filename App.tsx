import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@shopify/restyle';
import store from './src/services/storage/redux/store';
import theme from './src/theme';
import AppScreens from './src/navigation';
import ErrorBoundary from './src/components/organisms/ErrorBoundary';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <StatusBar />
        <Provider store={store}>
          <AppScreens />
        </Provider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;

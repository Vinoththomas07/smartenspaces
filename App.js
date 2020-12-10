/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import StackNavigation from './src/navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StackNavigation/>
    </Provider>
  );
};

export default App;

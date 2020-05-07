import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Components
import MainNavigator from './src/navigation/MainNavigator';

//Redux
import { Provider } from 'react-redux';
import configureStore from './src/store/store'

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
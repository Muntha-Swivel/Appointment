import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/navigation/StackNavigation/StackNavigation';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {Provider as PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'red',
  },
});

export default App;

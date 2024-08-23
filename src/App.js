import * as React from 'react';
import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {AppNavigator} from './routes';
import {NavigationContainer} from '@react-navigation/native';

export default function Main() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}



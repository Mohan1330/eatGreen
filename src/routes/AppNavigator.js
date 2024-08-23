import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeNavigator from './HomeNavigator';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          //   headerBackgroundContainerStyle: {
          //     backgroundColor: colors.primary,
          //   },
        }}
        name="Home"
        component={HomeNavigator}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});

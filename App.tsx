import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';

import SplashScreen from './src/screens/SplashScreen';
import BottomTabBar from './src/screens/BottomTabBar';
import TaskAddScreen from './src/screens/TaskAddScreen';

import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import UpdateTaskScreen from './src/screens/UpdateTaskScreen';

enableScreens(true);
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>  
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTabBar"
          component={BottomTabBar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TaskAddScreen"
          component={TaskAddScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpdateTaskScreen"
          component={UpdateTaskScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import TaskListScreen from './TaskListScreen';

import { Colors } from '../utils/Colors';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {

  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            }else if (route.name === 'TaskList') {
              iconName = 'tasks';
            }else if (route.name === 'About') {
              iconName = 'user-o';
            }


            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.background,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#fff', paddingBottom: 5 },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Tab.Screen name="TaskList" component={TaskListScreen} options={{headerShown:false}}/>
        <Tab.Screen name="About" component={AboutScreen} options={{headerShown:false}}/>
      </Tab.Navigator>
  );
};

export default BottomTabBar;

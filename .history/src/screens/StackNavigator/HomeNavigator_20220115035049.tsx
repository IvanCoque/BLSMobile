import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../Navigation/SettingsScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const  HomeNavigator= () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" options={{title:'Principal'}} component={StackNavigator} />    
      <Drawer.Screen name="Settings" options={{title=''}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
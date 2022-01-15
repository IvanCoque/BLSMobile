import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../Navigation/SettingsScreen';

const Drawer = createDrawerNavigator();

export const  HomeNavigator= () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={SettingsScreen} />    
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
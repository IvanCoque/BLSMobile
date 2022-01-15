import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../Navigation/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const  MenuHomeNavigation = () => {
    const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
        drawerType={width >= 768 ? 'permanent' : 'front'}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />    
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FlatListComponent } from '../../components/FlatListComponent';
import { styles } from '../../theme/appTheme';

export const ReservaCitasScreen = () => {
  const menuItems: MenuItem[] = [
    {
        name : 'Animation 101',
        icon : 'ios-book',
        components : 'Animation101Screen'
    },
    {
        name : 'Animation 102',
        icon : 'calendar',
        components : 'Animation102Screen'
    }
]
  return (
        <SafeAreaView style = {styles.globalMargin}>
           <FlatListComponent/>
        </SafeAreaView>
    
  );
};

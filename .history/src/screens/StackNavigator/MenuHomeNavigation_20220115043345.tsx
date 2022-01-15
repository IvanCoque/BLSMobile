import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../Navigation/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Text, useWindowDimensions,Image, View } from 'react-native';
import { styles } from '../../theme/appTheme';

const Drawer = createDrawerNavigator();

export const  MenuHomeNavigation = () => {
    const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
        drawerType={width >= 768 ? 'permanent' : 'front'}
        drawerContent = { (props)=> <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />    
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = (props:DrawerContentComponentProps<DrawerContentOptions>)=>{
    return(    
        <DrawerContentScrollView>
            <View
                style={styles.avatarContainer}
            >    
                <Image 
                    source={require('../../assets/Home/LogoDermatologiaHG.png')}
                    style={styles.avatar}
                />
            </View>
            {/*OPCIONES DE MENU */}
            <View
        </DrawerContentScrollView>
    ) 
}

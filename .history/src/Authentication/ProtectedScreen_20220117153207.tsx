import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
//import { MenuHomeNavigation } from '../screens/StackNavigator/MenuHomeNavigation'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../Navigation/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Text, useWindowDimensions,Image, View, Button } from 'react-native';
import { styles } from '../../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../../context/AuthContext';



export const ProtectedScreen = () => {
    const {width} = useWindowDimensions();
    
    
    const {user, token, logOut} = useContext(AuthContext)
    return (
        
        <Drawer.Navigator
        drawerType={width >= 768 ? 'permanent' : 'front'}
        drawerContent = { (props)=> <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />    
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title : {
        fontSize: 20,
        marginBottom: 20
    }
});

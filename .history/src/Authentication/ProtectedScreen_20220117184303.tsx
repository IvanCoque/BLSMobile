import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import React, { useContext, useEffect, useState } from 'react'
import { SettingsScreen } from '../screens/Navigation/SettingsScreen'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'
const Drawer = createDrawerNavigator()
export const ProtectedScreen = () => {
    return (
            <Drawer.Navigator
                
                drawerContent = { (props)=> <MenuInterno {...props}/>}
            >
                <Drawer.Screen name="SettingsScreen" options={{ title : 'Home'}} component={SettingsScreen} />
            </Drawer.Navigator>
    
    )
}

const MenuInterno = ({navigation}:DrawerContentComponentProps<DrawerContentOptions>)=>{
    const {user, token, logOut} = useContext(AuthContext)
    const [image, setImage] = useState('../assets/Home/LogoDermatologiaHG.png');

    console.log(user);
            if(user){
                setImage(user.imagen);
            }
    
   
}
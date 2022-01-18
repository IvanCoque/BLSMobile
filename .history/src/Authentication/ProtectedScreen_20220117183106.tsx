import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { SettingsScreen } from '../screens/Navigation/SettingsScreen'
const Drawer = createDrawerNavigator()
export const ProtectedScreen = () => {
    return (
            <Drawer.Navigator
                drawerType={'permanent'}
                drawerContent = { (props)=> <MenuInterno {...props}/>}
            >
                <Drawer.Screen name="SettingsScreen" options={{ title : 'Home'}} component={SettingsScreen} />
            </Drawer.Navigator>
    
    )
}

const MenuInterno = ({navigation}:DrawerContentComponentProps<DrawerContentOptions>)=>{
    return(
        <DrawerContentScrollView>
            </DrawerContentScrollView>
    )
}
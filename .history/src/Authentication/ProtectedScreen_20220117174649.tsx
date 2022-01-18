import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { SettingsScreen } from '../screens/Navigation/SettingsScreen'
const Drawer = createDrawerNavigator()
export const ProtectedScreen = () => {
    return (
            <Drawer.Navigator>
                <Drawer.Screen name="SettingsScreen" options={{title}} component={SettingsScreen} />
            </Drawer.Navigator>
    
    )
}

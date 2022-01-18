import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
const Drawer = createDrawerNavigator()
export const ProtectedScreen = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="ProtectedScreen" component={ProtectedScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

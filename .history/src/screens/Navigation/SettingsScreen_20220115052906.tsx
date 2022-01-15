import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../../context/AuthContext'

export const SettingsScreen = () => {
    const context = useContext(AuthContext)
    context.
    return (
        <View>
            <Text>Hola desde Settings</Text>
        </View>
    )
}

import React, { useContext } from 'react'
import { Text, View } from 'react-native'

export const SettingsScreen = () => {
    const context = useContext()
    return (
        <View>
            <Text>Hola desde Settings</Text>
        </View>
    )
}

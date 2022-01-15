import React from 'react'
import { View, Text } from 'react-native'

const CounterScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 30,
                color: 'white',
                top: -110
            }}>Contador: xxx</Text>
        </View>
        )
}

export default CounterScreen

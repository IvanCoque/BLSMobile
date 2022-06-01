import React from 'react'
import { View } from 'react-native'

export const Background = () => {
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: '#7a0d0d7d',
                width: 1000,
                height: 1200,
                transform: [
                    { rotate: '-70deg' }
                ]
            }}
        >
            
        </View>
    )
}

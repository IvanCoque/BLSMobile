import React from 'react'
import { View } from 'react-native'

export const Background = () => {
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: 'rgba(#128be1cc, 0,0,0.8)',
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

import React from 'react'
import { Image, View } from 'react-native'

export const Logo = () => {
    return (
        <View 
            style={{
                alignItems: 'center'
            }}
        >
            <Image
                source={require('../assets/Home/LogoDermatologiaHG.png')}
                style={{
                    width: 100,
                    height: 110
                }}
            >
                
            </Image>
        </View>
    )
}

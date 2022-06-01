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
                source={require('../assets/Home/logo.png')}
                style={{
                    width: "30%",
                    height: "45%"
                }}
            >
                
            </Image>
        </View>
    )
}

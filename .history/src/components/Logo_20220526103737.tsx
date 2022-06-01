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
                    paddingTop: 300,
                    width: "55%",
                    height: "55%"
                }}
            >
                
            </Image>
        </View>
    )
}

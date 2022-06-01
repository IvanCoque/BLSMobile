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
                    paddingTop: 200,
                    width: 110,
                    height: "55%"
                }}
            >
                
            </Image>
        </View>
    )
}

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
                    width: 120,
                    height: 120,
                    resizeMode: 'contain',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 7,
                    },
                    shadowOpacity: 0.41,
                    shadowRadius: 9.11,
                    elevation: 14,
                }}
            >
                
            </Image>
        </View>
    )
}

import React from 'react'
import { Image, View } from 'react-native'

export const FotoPerfil = ({foto }) => {
    return (
        <View 
            style={{
                alignItems: 'center'
            }}
        >
            <Image
                source={require(foto)}
                style={{
                    width: 110,
                    height: 100
                }}
            >
                
            </Image>
        </View>
    )
}

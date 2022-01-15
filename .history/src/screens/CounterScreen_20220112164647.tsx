import React, {useState} from 'react'
import { View, Text, Button, ImageBackground } from 'react-native'

const CounterScreen = () => {
    const [contador, setContador] = useState(0)
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ImageBackground>

            </ImageBackground>
                       
        </View>
        )
}

export default CounterScreen

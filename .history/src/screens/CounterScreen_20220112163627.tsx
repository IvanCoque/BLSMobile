import React, {useState} from 'react'
import { View, Text } from 'react-native'

const CounterScreen = () => {
    const [contador, setContador] = useState(0)
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
                top: 0
            }}>Contador: {contador}</Text>
            
        </View>
        )
}

export default CounterScreen

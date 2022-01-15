import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'

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
            }}>
                Contador: {contador}
            </Text>
            <Button>
                <Text>Aumentar</Text>
            </Button>

        </View>
        )
}

export default CounterScreen

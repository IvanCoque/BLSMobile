import React from 'react'
import {View, Text, Button} from 'react-native'
export const PrimeraScreen = ({navigation:any}) => {
    console.log(props);
    return (
        <View>
            <Text>Primera Screen</Text>
            <Button
                title="Go to Second Screen"
                onPress = { ()=> navigate}
            />
        </View>
    )
}

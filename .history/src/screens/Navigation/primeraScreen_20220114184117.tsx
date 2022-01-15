import React from 'react'
import {View, Text, Button} from 'react-native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

interface Props extends NativeStackNavigationProp<any, any>{};
export const PrimeraScreen = ({ navigation }:Props) => {
    console.log(navigation)
    return (
        <View style={}>
            <Text>Primera Screen</Text>
            <Button
                title="Go to Second Screen"
                onPress = { ()=> navigation.navigate("SegundaScreen")}
            />
        </View>
    )
}

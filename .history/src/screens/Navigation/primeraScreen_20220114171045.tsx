import React from 'react'
import {View, Text, Button} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any>{};
export const PrimeraScreen = ({navigation}:any) => {
    console.log(navigation);
    return (
        <View>
            <Text>Primera Screen</Text>
            <Button
                title="Go to Second Screen"
                onPress = { ()=> navigation.navigate}
            />
        </View>
    )
}

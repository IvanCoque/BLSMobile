import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View, Text, Button} from 'react-native'
export const SegundaScreen = ({navigation}) => {
    const navigator = useNavigation();
    return (
        <View>
            <Text>Segunda Screen </Text>
            <Button
                title="Go to Third Screen"
                onPress = { ()=> navigator.navigate("TerceraScreen")}
            />
        </View>
    )
}

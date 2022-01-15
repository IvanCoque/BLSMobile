import React from 'react'
import {View, Text, Button} from 'react-native'
export const SegundaScreen = ({navigation}) => {
    return (
        <View>
            <Text>Segunda Screen </Text>
            <Button
                title="Go to Third Screen"
                onPress = { ()=> navigation.navigate("TerceraScreen")}
            />
        </View>
    )
}

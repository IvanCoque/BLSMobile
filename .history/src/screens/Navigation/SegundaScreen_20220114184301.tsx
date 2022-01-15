import React from 'react'
import {View, Text} from 'react-native'
export const SegundaScreen = () => {
    return (
        <View>
            <Text>Segunda Screen </Text>
            <Button
                title="Go to Second Screen"
                onPress = { ()=> navigation.navigate("SegundaScreen")}
            />
        </View>
    )
}

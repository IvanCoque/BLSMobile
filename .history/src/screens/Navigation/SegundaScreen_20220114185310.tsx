import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View, Text, Button} from 'react-native'

interface Props extends NativeStackNavigationProp<any, any>{};
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

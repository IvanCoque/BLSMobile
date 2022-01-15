import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View, Text, Button} from 'react-native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
interface Props extends NativeStackNavigationProp<any, any>{};
export const SegundaScreen = ({navigation}:Props) => {
    
    useEffect(() => {
        return () => {
            effect
        };
    }, [])
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
function useEffect(arg0: () => () => void, arg1: never[]) {
    throw new Error('Function not implemented.')
}


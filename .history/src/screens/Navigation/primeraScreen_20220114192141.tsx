import React from 'react'
import {View, Text, Button} from 'react-native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { styles } from '../../theme/appTheme'
export const PrimeraScreen = () => {
    return (
        <View style={styles.globalMargin}>
            <Text>Primera Screen</Text>
            <Button
                title="Go to Second Screen"
                onPress = { ()=> navigation.navigate("SegundaScreen")}
            />
        </View>
    )
}

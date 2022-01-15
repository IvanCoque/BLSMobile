import React from 'react'
import {View, Text, Button} from 'react-native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { styles } from '../../theme/appTheme'

interface Props extends NativeStackNavigationProp<any, any>{};
export const PrimeraScreen = ({ navigation }:Props) => {
    const navigator = useNavigation();
    return (
        <View style={styles.globalMargin}>
            <Text>Primera Screen</Text>
            <Button
                title="Go to Second Screen"
                onPress = { ()=> naviga.navigate("SegundaScreen")}
            />
        </View>
    )
}

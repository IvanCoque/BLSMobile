import {createStackNavigator} from 'react-navigation-stack';
const Stack = createStackNavigator();
import {primeraScreen} from './src/screens/Navigation/primeraScreen';
import {SegundaScreen} from './src/screens/Navigation/SegundaScreen';
import {TerceraScreen} from './src/screens/Navigation/TerceraScreen';
export const StackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="PrimeraScreen" component={PrimeraScreen} />
            <Stack.Screen name="SegundaScreen" component={SegundaScreen} />
            <Stack.Screen name="TerceraScreen" component={TerceraScreen} />
        </Stack.Navigator>

    )
}
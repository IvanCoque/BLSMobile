import {createStackNavigator} from 'react-navigation-stack';
const Stack = createStackNavigator();
import {PrimeraScreen} from '../Navigation/PrimeraScreen';
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
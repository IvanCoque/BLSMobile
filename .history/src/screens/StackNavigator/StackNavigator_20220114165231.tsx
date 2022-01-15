import {createStackNavigator} from 'react-navigation-stack';
const Stack = createStackNavigator();
import {}
export const StackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="PrimeraScreen" component={PrimeraScreen} />
            <Stack.Screen name="SegundaScreen" component={SegundaScreen} />
            <Stack.Screen name="TerceraScreen" component={TerceraScreen} />
        </Stack.Navigator>

    )
}
import {createStackNavigator} from 'react-navigation-stack';
const Stack = createStackNavigator();

export const StackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Primera" component={primeraScreen} />
            <Stack.Screen name="Segunda" component={SegundaScreen} />
            
    )
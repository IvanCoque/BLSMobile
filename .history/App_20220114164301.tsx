
import React from 'react'
import {View, Text, SafeAreaView, StatusBar} from 'react-native'
//import { CalculadoraScreen } from './src/screens/CalculadoraScreen'
import { styles } from './src/theme/appTheme'
import { NavigationContainer } from '@react-navigation/native'
//import { FlexScreen } from './src/screens/FlexScreen';
//import { TareaScreen } from './src/screens/TareaScreen';
//import { PositionScreen } from './src/screens/PositionScreen';
//import HolaMundoScreen from './src/screens/HolaMundoScreen'
//import CounterScreen from './src/screens/CounterScreen'
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
//import { DimensionesScreen } from './src/screens/DimensionesScreen'

const App = () => {
  return (
    /*
    <HolaMundoScreen/>
    <CounterScreen/>
    <BoxObjectModelScreen/>
    <DimensionesScreen/>
    <PositionScreen/>
      <FlexScreen/>
      <TareaScreen/>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />
       <CalculadoraScreen/>
    */
    <NavigationContainer>

      <SafeAreaView style={styles.fondo}>
      <Text>asdsad</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;

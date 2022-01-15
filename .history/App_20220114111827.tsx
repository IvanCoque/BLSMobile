import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import { FlexScreen } from './src/screens/FlexScreen';
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
    */
    <SafeAreaView style={{
      flex: 1
    }}> 
      <FlexScreen/>
    </SafeAreaView>
  )
}

export default App;
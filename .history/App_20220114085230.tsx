import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
import { PositionScreen } from './src/screens/PositionScreen';
//import HolaMundoScreen from './src/screens/HolaMundoScreen'
//import CounterScreen from './src/screens/CounterScreen'
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
//import { DimensionesScreen } from './src/screens/DimensionesScreen'
const App = () => {
  return (
    //<HolaMundoScreen/>
    //<CounterScreen/>
    //<BoxObjectModelScreen/>
    //<DimensionesScreen/>
    <SafeAreaView style={{
      flex: 1
    }}>
      <PositionScreen/>    
    </SafeAreaView>
  )
}

export default App;

import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
//import HolaMundoScreen from './src/screens/HolaMundoScreen'
//import CounterScreen from './src/screens/CounterScreen'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
const App = () => {
  return (
    //<HolaMundoScreen/>
    //<CounterScreen/>
    <SafeAreaView style={{
      height: 400,
      
    }}>
      <BoxObjectModelScreen/>
    </SafeAreaView>
  )
}

export default App;

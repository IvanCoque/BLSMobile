import 'react-native-gesture-handler'
import React from 'react'
import {View, Text, SafeAreaView} from 'react-native'
//import { CalculadoraScreen } from './src/screens/CalculadoraScreen'
import { styles } from './src/theme/appTheme'
import { NavigationContainer } from '@react-navigation/native'
import { HomeNavigator } from './src/screens/StackNavigator/HomeNavigator'
import { MenuHomeNavigation } from './src/screens/StackNavigator/MenuHomeNavigation'
import { AuthProvider } from './src/context/AuthContext'
//import { StackNavigator } from './src/screens/StackNavigator/StackNavigator'
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
      <SafeAreaView >
      <Text>asdsad</Text>
      </SafeAreaView>
      
      <StackNavigator/>
      
        <MenuHomeNavigation/>
      <HomeNavigator/>
    */
    <NavigationContainer>
      <AppState>
        
      <StackNavigator/>
      
      </AppState>
    </NavigationContainer>
  );
}
const AppState = ({children}:any) =>{
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )  
}

export default App;

import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/context/AuthContext'
import { StackNavigator } from './src/Navigation/StackNavigator'

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

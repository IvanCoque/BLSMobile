import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
//import { MenuHomeNavigation } from '../screens/StackNavigator/MenuHomeNavigation'
export const ProtectedScreen = () => {
    const {width} = useWindowDimensions();
    
    
    return (
      <Drawer.Navigator
          drawerType={width >= 768 ? 'permanent' : 'front'}
          drawerContent = { (props)=> <MenuInterno {...props}/>}
      >
        <Drawer.Screen name="StackNavigator" component={StackNavigator} />    
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      </Drawer.Navigator>
    );
    const {user, token, logOut} = useContext(AuthContext)
    return (
        <View style = {styles.container}>
            <Text style={styles.title}>Protected</Text>
            <Button
                title='logout'
                color = '#5856D6'
                onPress={logOut }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title : {
        fontSize: 20,
        marginBottom: 20
    }
});

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import React, { useContext, useEffect, useState } from 'react'
import { SettingsScreen } from '../screens/Navigation/SettingsScreen'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'
const Drawer = createDrawerNavigator()
export const ProtectedScreen = () => {
    return (
            <Drawer.Navigator
                
                drawerContent = { (props)=> <MenuInterno {...props}/>}
            >
                <Drawer.Screen name="SettingsScreen" options={{ title : 'Home'}} component={SettingsScreen} />
            </Drawer.Navigator>
    
    )
}

const MenuInterno = ({navigation}:DrawerContentComponentProps<DrawerContentOptions>)=>{
    const {user, token, logOut} = useContext(AuthContext)
    const [image, setImage] = useState('../assets/Home/LogoDermatologiaHG.png');

    console.log(user);
    useEffect(() => {
        return () => {
            if(user){
                setImage(user.imagen);
            }
        };
    }, [])
    
    return(
        <DrawerContentScrollView>
            <View
                style={styles.avatarContainer}
            >    
                <Image 
                    source={require('../assets/Home/LogoDermatologiaHG.png')}
                    style={styles.avatar}
                />
            </View>
            {/*OPCIONES DE MENU */}
            <View style = {styles.menuContainer}>
                <TouchableOpacity style={styles.menuButton}
                    onPress = {()=> navigation.navigate("StackNavigator")}
                >
                    <Text style={styles.menuTexto}> Navegación</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton}
                    onPress = {()=> navigation.navigate("SettingsScreen")}
                >
                    <Text style={styles.menuTexto}> Ajustes </Text>
                </TouchableOpacity>
                
                <Button
                    title='logout'
                    color = '#5856D6'
                    onPress={()=>{} }
                />


            </View>
        </DrawerContentScrollView>
    )
}
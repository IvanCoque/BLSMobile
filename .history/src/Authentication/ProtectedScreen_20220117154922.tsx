import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View, useWindowDimensions,Image } from 'react-native'
import { AuthContext } from '../context/AuthContext'
//import { MenuHomeNavigation } from '../screens/StackNavigator/MenuHomeNavigation'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/Navigation/SettingsScreen';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();


export const ProtectedScreen = () => {
    const {width} = useWindowDimensions();
    
    
    return (
        
        <Drawer.Navigator
        drawerType={width >= 768 ? 'permanent' : 'front'}
        drawerContent = { (props)=> <MenuInterno {...props}/>}
    >
     <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
    )
}

const MenuInterno = ({navigation}:DrawerContentComponentProps<DrawerContentOptions>)=>{
    
    const {user, token, logOut} = useContext(AuthContext)
    console.log(user);
    if(user){
        
    const imagen = user.imagen;
    }
    return(    
        <DrawerContentScrollView>
            <View
                style={styles.avatarContainer}
            >    
                <Image 
                    source={require(imagen)}
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
                    onPress={logOut }
                />


            </View>
        </DrawerContentScrollView>
    ) 
}

import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../Navigation/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Text, useWindowDimensions,Image, View } from 'react-native';
import { styles } from '../../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export const  MenuHomeNavigation = () => {
    const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
        drawerType={width >= 768 ? 'permanent' : 'front'}
        drawerContent = { (props)=> <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />    
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = (props:DrawerContentComponentProps<DrawerContentOptions>)=>{
    return(    
        <DrawerContentScrollView>
            <View
                style={styles.avatarContainer}
            >    
                <Image 
                    source={require('../../assets/Home/LogoDermatologiaHG.png')}
                    style={styles.avatar}
                />
            </View>
            {/*OPCIONES DE MENU */}
            <View style = {styles.menuContainer}>
                <TouchableOpacity style={styles.menuButton}
                    onPress = 
                >
                    <Text style={styles.menuTexto}> Navegación</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton}
                    onPress = 
                >
                    <Text style={styles.menuTexto}> Ajustes </Text>
                </TouchableOpacity>

            </View>
        </DrawerContentScrollView>
    ) 
}

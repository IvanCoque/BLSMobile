r
export const ProtectedScreen = () => {
    //const {width} = useWindowDimensions();
    
    
    return (
        <></>
    )
}

const MenuInterno = ({navigation})=>{
    
    const {user, token, logOut} = useContext(AuthContext)
    const [userImage , setUserImage] = React.useState('')
    console.log(user);
     
    if(user){
        
        setUserImage(user.imagen);
    }else{
        setUserImage('');
    }
    return(    
        <View>
            <View
                style={styles.avatarContainer}
            >    
                <Image 
                    source={require('')}
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
            </View>
    ) 
}

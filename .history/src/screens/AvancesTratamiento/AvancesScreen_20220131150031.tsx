import React, { useContext } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../../components/FlatListMenuItem';
import { MenuItem } from '../../interfaces/appInterfaces';
import { styles } from '../../theme/appTheme';
import { useHistoriasClinicas } from '../../hooks/useHistoriasClinicas';
import { AuthContext } from '../../context/AuthContext';
export const AvancesScreen = () => {
    
    const {user} = useContext(AuthContext)
    const {_id}:any = user;
    const {historiasClinicas} = useHistoriasClinicas({_id});
    console.log(historiasClinicas);
    
    const menuItems: MenuItem[] = [
        {
            name : 'Animation 101',
            icon : 'book-online',
            
        },
        {
            name : 'Animation 102',
            icon : 'calendar-today',
            //components : 'Animation102Screen'
        }
      ]
      
        const {top} = useSafeAreaInsets();
    
          const renderListHeader = () =>{
              return (
                  <View style = {{
                      marginTop : top+20,
                      marginBottom : 20
                  }}>
                      <Text style = {styles.title}>
                          Avances del Paciente
                      </Text>
                  </View>
              )
          }
    
          const itemSeparator = () =>{
              return(
                  <View style= {{
                      borderBottomWidth : 1,
                      opacity: 0.4,
                      marginVertical : 8
                  }}>
    
                  </View>
              )
          }
        return (
          <SafeAreaView style = {styles.globalMargin}>
              <FlatList
                  data={}
                  renderItem = { ({item}) => <FlatListMenuItem menuItem = {item}/>}
                  keyExtractor = { (item) => item.name}
                  ListHeaderComponent = {renderListHeader}
                  ItemSeparatorComponent={itemSeparator}
              />
            </SafeAreaView>
        );
};

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
    console.log('historias clincas desde avances screen')
    console.log(historiasClinicas);
    
    const menuItems: MenuItem[] = [
        {
            _id :'1',
            name : 'Animation 101',
            icon : 'book-online',
            
        },
        {
            _id :'2',
            name : 'Animation 102',
            icon : 'calendar-today',
            
        }
      ]
      
        const {top} = useSafeAreaInsets();
        if(isLoading){
            return (
                <LoadingScreen/>
            )
        }else{
            
        }
          
};

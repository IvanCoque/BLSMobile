import React from 'react';
import { Alert, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Agenda, Calendar } from 'react-native-calendars';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../../components/FlatListMenuItem';
import { MenuItem } from '../../interfaces/appInterfaces';
import { styles } from '../../theme/appTheme';

export const ReservaCitasScreen = () => {
  const menuItems: MenuItem[] = [
    {
        _id: '1',
        name : 'Animation 101',
        icon : 'book-online',
        route : 'Galeria'
    },
    {
        _id: '2',
        name : 'Animation 102',
        icon : 'calendar-today',
        route : 'ale'
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
                      Reserva de Citas
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
           {/* <FlatList
              data={menuItems}
              renderItem = { ({item}) => <FlatListMenuItem menuItem = {item}/>}
              keyExtractor = { (item) => item.name}
              ListHeaderComponent = {renderListHeader}
              ItemSeparatorComponent={itemSeparator}
          />  */}
          {
              renderListHeader()
          }
            <Agenda
                // The list of items that have to be displayed in agenda. If you want to render item as empty date
                // the value of date key has to be an empty array []. If there exists no value for date key it is
                // considered that the date in question is not yet loaded
                items={{}}
            
            />

        </SafeAreaView>
    );

};

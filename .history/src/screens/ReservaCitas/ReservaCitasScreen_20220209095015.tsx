import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
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
          /> */}
          <Calendar
            // Initially visible month. Default = Date()
            current={'2012-03-01'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2012-05-10'}
            
            />

        </SafeAreaView>
    );

};

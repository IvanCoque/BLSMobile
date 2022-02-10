import React, { useState } from 'react';
import { Alert, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Agenda, Calendar, DateData } from 'react-native-calendars';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../../theme/appTheme';

export const ReservaCitasScreen = () => {
    const [items, setItems] = useState([]);
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
    
    const timeToString(time: number) =>{
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }
    }
  const loadItems = (day: DateData) => {
    const itemsLoad = items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!itemsLoad[strTime]) {
          itemsLoad[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            itemsLoad[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
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
                items={{items}}
                loadItemsForMonth={loadItems}
            
            />

        </SafeAreaView>
    );

};

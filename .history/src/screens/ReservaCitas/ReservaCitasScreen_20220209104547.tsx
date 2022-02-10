import React, { useEffect, useState } from 'react';
import { Alert, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Agenda, AgendaSchedule, Calendar, DateData } from 'react-native-calendars';
import { Card } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../../theme/appTheme';
const timeToString= (time: number) =>{
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

export const ReservaCitasScreen = () => {
    const [items, setItems] = useState({});
    const {top} = useSafeAreaInsets();

    
    
      const loadItems = (day) => {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
              items[strTime] = [];
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150)),
                });
              }
            }
          }
          const newItems = {};
          Object.keys(items).forEach((key) => {
            newItems[key] = items[key];
          });
          setItems(newItems);
        }, 1000);
      };
      
  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Typography>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

//   const loadItems = (day: DateData) => {
  
//     setTimeout(() => {
//       for (let i = -15; i < 85; i++) {
//         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//         const strTime = timeToString(time);

//         if (!items[strTime]) {
//           items[strTime] = [];
          
//           const numItems = Math.floor(Math.random() * 3 + 1);
//           for (let j = 0; j < numItems; j++) {
//             items[strTime].push({
//               name: 'Item for ' + strTime + ' #' + j,
//               height: Math.max(50, Math.floor(Math.random() * 150)),
//             //   day: strTime
//             });
//           }
//         }
//       }

//       const newItems: AgendaSchedule = {};
//       Object.keys(items).forEach(key => {
//         newItems[key] = items[key];
//       });
//       setItems(newItems)

//     }, 1000);
//   }
    return (
      <SafeAreaView style = {styles.globalMargin}>
           {/* <FlatList
              data={menuItems}
              renderItem = { ({item}) => <FlatListMenuItem menuItem = {item}/>}
              keyExtractor = { (item) => item.name}
              ListHeaderComponent = {renderListHeader}
              ItemSeparatorComponent={itemSeparator}
          />  */}
          <View style = {{
                  marginTop : top+20,
                  marginBottom : 20
              }}>
                  <Text style = {styles.title}>
                      Reserva de Citas
                  </Text>
              </View>
            <View
            style = {{flex: 1}}
            >
              
                <Agenda
                    // The list of items that have to be displayed in agenda. If you want to render item as empty date
                    // the value of date key has to be an empty array []. If there exists no value for date key it is
                    // considered that the date in question is not yet loaded
                    items={items}
                    loadItemsForMonth={loadItems}
                    selected={'2022-12-02'}
                
                />
            </View>

        </SafeAreaView>
    )
}

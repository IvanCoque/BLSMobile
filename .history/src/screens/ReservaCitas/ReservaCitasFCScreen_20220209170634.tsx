import {addDays, format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Agenda} from 'react-native-calendars';
import { ReservaCita } from '../../interfaces/appInterfaces';
import dermatologiaApi from '../../api/dermatologiaApi';
import EventCalendar from 'react-native-events-calendar'
let { width } = Dimensions.get('window')
/*
type Item = {
  name: string;
  cookies: boolean;
};
*/
// type Post = {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// };

export const ReservaCitasFCScreen: React.FC = () => {
  const [items, setItems] = useState<{[key: string]: ReservaCita[]}>({});

  useEffect(() => {
    // run once

    const getData = async () => {
    //   const response = await fetch(
    //     'https://jsonplaceholder.typicode.com/posts',
    //   );
        const response = await dermatologiaApi.get('/reservasCitas/');
        const data: ReservaCita[] = await response.data;
        console.log('data desde reserva cita fc')
        console.log(data);
        const mappedData = data.map((reserva, index) => {
            //const date = addDays(new Date(), index);
            console.log('post desde map ----------')
            console.log(reserva);
            return {
            ...reserva,
            date: format(new Date(reserva.fecha_hora_inicio_reserva), 'yyyy-MM-dd'),
            };
        });

        const reduced = mappedData.reduce(
            (acc: {[key: string]: ReservaCita[]}, currentItem) => {
            const {date, ...coolItem} = currentItem;

            acc[date] = [coolItem];

            return acc;
            },
            {},
        );

        setItems(reduced);
    };

    getData();
  }, []);

  const renderItem = (item: ReservaCita) => {
      console.log('item desde render item')
        console.log(`${new Date(item.fecha_hora_fin_reserva).getHours()}:${new Date(item.fecha_hora_fin_reserva).getMinutes()}}`);
      return (
      <View style={styles.itemContainer}>
        <Text>{item.motivo_reserva}</Text>
        <Text>Hora inicio de cita : {`${new Date(item.fecha_hora_inicio_reserva).getHours()}:${new Date(item.fecha_hora_inicio_reserva).getMinutes()}`}</Text>
        <Text>Hora final de cita : {`${new Date(item.fecha_hora_fin_reserva).getHours()}:${new Date(item.fecha_hora_fin_reserva).getMinutes()}`}</Text>
      </View>
    );
  };

  const events = [
    { start: '2017-09-07 00:30:00', end: '2017-09-07 01:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-07 01:30:00', end: '2017-09-07 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-07 04:10:00', end: '2017-09-07 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-07 01:05:00', end: '2017-09-07 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-07 14:30:00', end: '2017-09-07 16:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 01:20:00', end: '2017-09-08 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 04:10:00', end: '2017-09-08 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 00:45:00', end: '2017-09-08 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-08 11:30:00', end: '2017-09-08 12:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-09 01:30:00', end: '2017-09-09 02:00:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-09 03:10:00', end: '2017-09-09 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
    { start: '2017-09-09 00:10:00', end: '2017-09-09 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
]

  return (
    <SafeAreaView style={styles.safe}>
      <View style = {{flex: 2}}>
        <Agenda items={items} renderItem={renderItem} />
      
      </View>
      
      <View style ={{flex : 3}}>
        <EventCalendar
            
            //eventTapped={this._eventTapped.bind(this)}
            events={events}
            width={width}
            initDate={'2017-09-08'}
            />
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

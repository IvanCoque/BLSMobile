import {addDays, format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Agenda} from 'react-native-calendars';
import { ReservaCita } from '../../interfaces/appInterfaces';
import dermatologiaApi from '../../api/dermatologiaApi';
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

const ReservaCitasFCScreen: React.FC = () => {
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
        console.log(item);
      return (
      <View style={styles.itemContainer}>
        <Text>{item.motivo_reserva}</Text>
        <
        <Text>{item.fecha_hora_fin_reserva}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Agenda items={items} renderItem={renderItem} />
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

export default ReservaCitasFCScreen;
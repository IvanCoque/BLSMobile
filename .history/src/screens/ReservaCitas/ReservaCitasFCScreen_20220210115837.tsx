import {addDays, format} from 'date-fns';
import React, {useEffect, useRef, useState} from 'react';
import {Button, Dimensions, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Agenda} from 'react-native-calendars';
import { ReservaCita } from '../../interfaces/appInterfaces';
import dermatologiaApi from '../../api/dermatologiaApi';
import EventCalendar from 'react-native-events-calendar'
import { Fab } from '../../components/Fab';
import DateTimePicker from '@react-native-community/datetimepicker';
let { width } = Dimensions.get('window')

type Hora = {
    start : string,
    end : string,
    title : string,
    summary: string
}
export const ReservaCitasFCScreen: React.FC = () => {
    //create ref to store the current visible date
    const calendarRef = useRef(null);
    useRef(new Date());
  const [items, setItems] = useState<{[key: string]: ReservaCita[]}>({});
  const [horas, setHoras] = useState<Hora[]>([]);
  const [selectedDay, setSelectedDay] = useState<string>('2022-02-09');
  const [isVisible, setIsVisible] = useState(false);


  //DATE
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('datetime');
  const [show, setShow] = useState(false);
  const [dateText, setDateText] = useState('Toque para escoger');

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
        
        const mapHoras = () =>{
            //const horas: {[key: string]: ReservaCita[]} = {};
            const horitas = data.map((reserva, index) => {
                return ({
                    start :new Date(reserva.fecha_hora_inicio_reserva).toUTCString(),
                    end : new Date(reserva.fecha_hora_fin_reserva).toUTCString(),
                    title : reserva.motivo_reserva,
                    summary : reserva.id_usuario.nombre
                })
                // setHoras({...horas, start : reserva.fecha_hora_inicio_reserva, end : reserva.fecha_hora_fin_reserva, title : reserva.motivo_reserva, summary : reserva.id_usuario.nombre})
            });
            console.log('las horas de aksad')
            console.log(horitas);
            setHoras(horitas);
        }
        mapHoras();
    };

    getData();
  }, []);

  const createReserva = () =>{
    console.log('crear reserva moodal')
    setIsVisible(true);
      
  }

  

  const renderItem = (item: ReservaCita) => {
      console.log('item desde render item')
        console.log(format(new Date(item.fecha_hora_inicio_reserva), 'yyyy-MM-dd'));
        setSelectedDay(format(new Date(item.fecha_hora_inicio_reserva), 'yyyy-MM-dd'));
      return (
      <View style={styles.itemContainer}>
        <Text>{item.motivo_reserva}</Text>
        <Text>Hora inicio de cita : {`${new Date(item.fecha_hora_inicio_reserva).getHours()}:${new Date(item.fecha_hora_inicio_reserva).getMinutes()}`}</Text>
        <Text>Hora final de cita : {`${new Date(item.fecha_hora_fin_reserva).getHours()}:${new Date(item.fecha_hora_fin_reserva).getMinutes()}`}</Text>
      </View>
    );
  };

  {/* DATE TIME PICKER*/}
  const onChangeDate = (event : any, selectedDate : any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    let tempDate = new Date (currentDate);
    let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    //let fTime = 'Hours' + tempDate.getHours() + ' Minutes' + tempDate.getMinutes();
    setDateText(fDate );
    //console.log(fDate + ' (' + fTime + ')');
  }
  
  const showMode = (currentMode : any) =>{
    setShow(true);
    setMode(currentMode);
  }


  return (
    <SafeAreaView style={styles.safe}>
      <View style = {{flex: 3}}>
        <Agenda items={items} renderItem={renderItem} selectedDay={'2022-02-08'}/>
      </View>
      <View style ={{flex : 3}}>
        <EventCalendar
            onRef={calendarRef}
            eventTapped={(event:Hora) => {
                console.log(event);
            }}
            
            events={horas}
            width={width}
            />
      </View>
      <Fab position='right' title={"+"} onPress={createReserva}/>

      <Modal
            animationType='fade'
            visible={isVisible}
            transparent

        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>  
                <View style={{ 
                        backgroundColor: 'white',
                        width: '80%', 
                        height: '70%', 
                        borderRadius: 10, 
                        justifyContent : 'center', 
                        alignItems : "center" 
                }}>
                    <Text style={{fontSize: 25, marginBottom: 10, 
                        fontWeight: 'bold', color : 'black'}}>Crear Reserva</Text>
                    <Text style = {{
                        marginVertical: 10,
                        fontWeight: 'bold',
                        color:'black',
                        fontSize: 20,
                    }}>Fecha de la cita</Text>
                    <TouchableOpacity onPress={() => showMode('date')}>
                      
                    <Text style = {{
                        marginTop: 10,
                        color:'black',
                        fontSize: 20,
                    }}>{ dateText} </Text>
                    
                    <View style = {{
                                margin: 20
                            }}>
                        <Button
                            title="Fecha de reserva"
                            onPress={() => showMode('date')}
                        />
                    </View>

                    {show && (
                                <DateTimePicker
                                    timeZoneOffsetInMinutes={0}
                                    value={date}
                                    mode={mode}
                                    display="default"
                                    onChange={onChangeDate}
                                    dayOfWeekFormat='long'
                                />
                            )}
                    
                    <Button
                        title="Cerrar modal"
                        onPress={() => setIsVisible(false)}
                    />
                </View>
            </View>
        </Modal>
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

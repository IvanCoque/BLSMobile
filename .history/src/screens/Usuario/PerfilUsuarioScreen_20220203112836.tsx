import React, { useContext, useState } from 'react';
import { Button, Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomSwitch } from '../../components/CustomSwitch';
import { styles } from '../../theme/appTheme';
import { CustomAlert } from '../../components/CustomAlert';
import { useForm } from '../../hooks/useForm';
import { FotoPerfil } from '../../components/FotoPerfil';
import { AuthContext } from '../../context/AuthContext';
import { loginStyles } from '../../theme/loginTheme';
import DateTimePicker from '@react-native-community/datetimepicker';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import {RNS3} from 'react-native-aws3';
import { Picker } from '@react-native-picker/picker';
import { LoadingScreen } from '../Navigation/LoadingScreen';
import { GradientBackground } from '../../components/GradientBackground';

export const PerfilUsuario = () => {


    //Context para la foto de perfil 
    const {user, token, logOut} = useContext(AuthContext)
    if(!user){
        return <LoadingScreen/>
    }
    

    const {top} = useSafeAreaInsets();
    const [state, setState] = useState({
        isActive : true, 
        isHungry : false,
        isHappy : true
    })
    
    /*DESDE REGISTER SCREEN */

    const {email, password, nombre, cedula, /*fecha_nacimiento,*/  estado_civil, religion, ocupacion, lugar_nacimiento, residencia, domicilio, telefono, estado,  username,onChange} = useForm({
        email : '',
        password : '',
        nombre : '',
        cedula : '',
        /*fecha_nacimiento : '2018/10/22',*/
        sexo : '',
        estado_civil: '',
        religion : '',
        ocupacion : '',
        lugar_nacimiento : '',
        residencia : '',
        domicilio : '',
        telefono : '',
        estado : '1',
        username : '',
    })
    

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [dateText, setDateText] = useState('Empty');
    //SEX PICKER 
    const [sex, setSex] = useState('');
    //IMAGE
    const [image, setImage]:any =useState();
    const [fullImageData , setFullImageData] : any = useState({});

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

    //Image
    
    const selectImage = () => {
        const options = {
            title : "Selecciona una imagen",
            storageOptions : {
                skipBackup : true,
                path : 'images',
               // mediaType : 'photo'
            }
        }

        launchImageLibrary(options,response => {
            if(response.errorCode){
                console.log(response.errorMessage);
            } else if (response.didCancel){
                console.log('Selección de usuario cancelada');
            } else {
                const path = response.assets[0].uri;
                setImage(path);
                setFullImageData(response.assets[0]);
            }
        })
    }

    const takePicture = () =>{
        const options = {
            title : "Tomar una imagen",
            storageOptions : {
                skipBackup : true,
                path : 'images'
            },
            includeBase64: true
        }

        launchCamera(options, response =>{
            if(response.errorCode){
                console.log(response.errorMessage);
            } else if (response.didCancel){
                console.log('Selección de usuario cancelada');
            } else {
                const path = response.assets[0].uri;
                setImage(path);
                setFullImageData(response.assets[0]);
            }
        })

    }

    const onRegister = async () =>  {
        /*
        try{
            const {data} = await dermatologiaApi.post('auth/signup', signUp)
            dispatch ({
                type: 'signUp',
                payload : {
                    token : data.token,
                    user: data.datosUsuario
                }
            })
        }catch(error){
            console.log(error)
        }
        */
                    console.log('Nombre arcuhiosd')
                    console.log(fullImageData);
                    /*
                    const FileUpload = {
                        file : {
                            name : fullImageData.fileName,
                            size: fullImageData.fileSize,  
                            type : fullImageData.type,
                            webkitRelativePath : fullImageData.uri, 
                        }
                    }
                    */
                   const file = {
                        uri : fullImageData.uri,
                        name : fullImageData.fileName,
                        type : fullImageData.type,
                   }
                   const config = {
                          keyPrefix: "mobile/",
                          bucket: 'dermatologiahg',
                          region: 'sa-east-1',
                          accessKey: 'AKIAQAUKBNLWM74VTENB',
                          secretKey: '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',
                          successActionStatus: 201
                   } 

                   RNS3.put(file, config)
                   .then(response => {
                       if (!response) return <div> Cargando .... </div>
                       console.log(response.body.postResponse)
                       console.log(response.body.postResponse.location)
                       const linkImagen = response.body.postResponse.location;
                       let booleanSex = false;
                       if(sex === '0'){
                            booleanSex = false
                       }else{
                           booleanSex = true
                       }
                       
                       signUp({
                            nombre,
                            cedula,
                            fecha_nacimiento : "1998/10/22",
                            sexo: booleanSex,
                            estado_civil, 
                            religion, 
                            ocupacion, 
                            lugar_nacimiento, 
                            residencia, 
                            domicilio, 
                            telefono, 
                            estado :'1',
                            imagen : linkImagen,
                            username,  
                            email,
                            password,
                        })
                    })
        /*

       console.log(nombre,cedula,sex,estado_civil, religion,  ocupacion,lugar_nacimiento,  residencia, domicilio, telefono,  image,   username,     email,  password);
        signUp({
            nombre,
            cedula,
            fecha_nacimiento : "1998/10/22",
            sexo: sex,
            estado_civil, 
            religion, 
            ocupacion, 
            lugar_nacimiento, 
            residencia, 
            domicilio, 
            telefono, 
            estado :'1',
            imagen : image,
            username,  
            email,
            password,
        })
        */
        Keyboard.dismiss();
    }

    
    /*
        PRINCIPIOS USEFORM
        const [inputState, setInputState] = useState({
            name : '',
            email : '',
            phone : '',
        })
    */
    const onSwitchChange= (value : boolean, field : string) => {
        setState({
            ...state, 
            [field]: value
        })
    }
    return( 
        <GradientBackground>

        </GradientBackground>
        
            
            
            
        );
};

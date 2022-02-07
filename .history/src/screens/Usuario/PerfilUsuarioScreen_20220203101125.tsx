import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomSwitch } from '../../components/CustomSwitch';
import { styles } from '../../theme/appTheme';
import { CustomAlert } from '../../components/CustomAlert';
import { useForm } from '../../hooks/useForm';
import { FotoPerfil } from '../../components/FotoPerfil';
import { AuthContext } from '../../context/AuthContext';
import { loginStyles } from '../../theme/loginTheme';
export const PerfilUsuario = () => {
    //Context para la foto de perfil 
    const {user, token, logOut} = useContext(AuthContext)

    const {top} = useSafeAreaInsets();
    const [state, setState] = useState({
        isActive : true, 
        isHungry : false,
        isHappy : true
    })
    
    /*DESDE REGISTER SCREE */

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
    }
    
    )
    /*
        PRINCIPIOS USEFORM
        const [inputState, setInputState] = useState({
            name : '',
            email : '',
            phone : '',
        })
    */
    const onChange= (value : boolean, field : string) => {
        setState({
            ...state, 
            [field]: value
        })
    }
    const onInputChange = (value : string , field : string) => {
        setState({
            ...state, 
            [field]: value
        })
    }
    return( 
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <View style = {{
                    ...styles.globalMargin,
                    top : top+10,
                }}>
                    <Text style = {styles.title}>Perfil de Usuario</Text>
                    <CustomSwitch isOn={false} onChange={(value) => onChange(value, 'isActive')}/>
                    <Text > {JSON.stringify(state, null, 5)}</Text>
                    <View style = {loginStyles.formContainer}>
                        {/* Keyboard avoid view*/}
                        <FotoPerfil foto = {user?.imagen}/>
                        <Text style={loginStyles.title}>Registro</Text>
                        
                        <Text style={loginStyles.label}>Nombres Completos</Text>
                        <TextInput
                            placeholder='Ingrese sus nombres'
                            placeholderTextColor = 'rgba(255,255,255,0.4)'
                            
                            underlineColorAndroid="white"
                            style = {[
                                        loginStyles.inputField,
                                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                    ]}
                            selectionColor='white'
                            onChangeText={ (value) => onChange(value, 'nombre')}
                            value = {nombre}  
                            onSubmitEditing={onRegister}
                            autoCorrect={false}
                        />
                        <Text style={loginStyles.label}>Cedula</Text>
                        <TextInput
                            placeholder='Ingrese su cédula'
                            placeholderTextColor = 'rgba(255,255,255,0.4)'
                            
                            underlineColorAndroid="white"
                            style = {[
                                        loginStyles.inputField,
                                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                    ]}
                            selectionColor='white'
                            onChangeText={ (value) => onChange(value, 'cedula')}
                            value = {cedula}  
                            onSubmitEditing={onRegister}
                            autoCorrect={false}
                        />
                        {/*FECHA NACIMIENTO */}
                            <Text style = {{
                                marginVertical: 10,
                                fontWeight: 'bold',
                                color:'white',
                                fontSize: 20,
                            }}>Fecha de Nacimiento</Text>
                            <Text style = {{
                                marginTop: 10,
                                fontWeight: 'bold',
                                color:'white',
                                fontSize: 20,
                            }}>{dateText}</Text>
                            <View style = {{
                                margin: 20
                            }}>
                                <Button
                                    title="Fecha de Nacimiento"
                                    onPress={() => showMode('date')}
                                />
                            </View>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    timeZoneOffsetInMinutes={0}
                                    value={date}
                                    mode={mode}
                                    display="default"
                                    onChange={onChangeDate}
                                    dayOfWeekFormat='long'
                                />
                            )}
                        {/*SEXO*/}
                        
                        <Text style={loginStyles.label}>Sexo</Text>
                        <Picker
                            selectedValue={sex}
                            onValueChange={(itemValue, itemIndex) =>
                                setSex(itemValue)
                            }
                            style={loginStyles.label}    
                        >
                            <Picker.Item label="Masculino" value="1" />
                            <Picker.Item label="Femenino" value="0" />
                        </Picker>

                        <Text style={loginStyles.label}>Estado civil</Text>
                        <TextInput
                            placeholder='Ingrese su estado civil'
                            placeholderTextColor = 'rgba(255,255,255,0.4)'
                        
                            underlineColorAndroid="white"
                            style = {[
                                        loginStyles.inputField,
                                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                    ]}
                            selectionColor='white'
                            onChangeText={ (value) => onChange(value, 'estado_civil')}
                            value = {estado_civil}  
                            onSubmitEditing={onRegister}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <Text style={loginStyles.label}>Religión</Text>
                        <TextInput
                            placeholder='Ingrese su religión'
                            placeholderTextColor = 'rgba(255,255,255,0.4)'

                            underlineColorAndroid="white"
                            style = {[
                                        loginStyles.inputField,
                                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                    ]}
                            selectionColor='white'
                            onChangeText={ (value) => onChange(value, 'religion')}
                            value = {religion}  
                            onSubmitEditing={onRegister}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <Text style={loginStyles.label}>Ocupación</Text>
                        <TextInput
                            placeholder='Ingrese su ocupación'
                            placeholderTextColor = 'rgba(255,255,255,0.4)'
                            
                            underlineColorAndroid="white"
                            style = {[
                                        loginStyles.inputField,
                                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                    ]}
                            selectionColor='white'
                            onChangeText={ (value) => onChange(value, 'ocupacion')}
                            value = {ocupacion}  
                            onSubmitEditing={onRegister}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <Text style={loginStyles.label}>Lugar Nacimiento</Text>
                        <TextInput
                            placeholder='Ingrese su lugar de nacimiento'
                            placeholderTextColor = 'rgba(255,255,255,0.4)'
                            
                            underlineColorAndroid="white"
                            style = {[
                                        loginStyles.inputField,
                                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                    ]}
                            selectionColor='white'
                            onChangeText={ (value) => onChange(value, 'lugar_nacimiento')}
                            value = {lugar_nacimiento}  
                            onSubmitEditing={onRegister}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <Text style={loginStyles.label}>Residencia</Text>
                        <TextInput
                            placeholder='Ingrese su residencia'
                            placeholderTextColor = 'rgba(255,255,255,0.4)'
            
                            underlineColorAndroid="white"
                            style = {[
                                        loginStyles.inputField,
                                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                    ]}
                            selectionColor='white'
                            onChangeText={ (value) => onChange(value, 'residencia')}
                            value = {residencia}  
                            onSubmitEditing={onRegister}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <Text style={loginStyles.label}>Domicilio</Text>
                        <TextInput
                            placeholder='Ingrese su domicilio'
                            placeholderTextColor = 'rgba(255,255,255,0.4)'
                    
                            underlineColorAndroid="white"
                            style = {[
                                        loginStyles.inputField,
                                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                    ]}
                            selectionColor='white'
                            onChangeText={ (value) => onChange(value, 'domicilio')}
                            value = {domicilio}  
                            onSubmitEditing={onRegister}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <Text style={loginStyles.label}>Telefono</Text>
                        <TextInput
                            placeholder='Ingrese su telefono'
                            placeholderTextColor = 'rgba(255,255,255,0.4)'
                            
                            underlineColorAndroid="white"
                            style = {[
                                        loginStyles.inputField,
                                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                    ]}
                            selectionColor='white'
                            onChangeText={ (value) => onChange(value, 'telefono')}
                            value = {telefono}  
                            onSubmitEditing={onRegister}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        {/*ESTADO */}
                        {/* IMAGEN */ }
                        <Text style={[
                            loginStyles.label,
                            {marginBottom: 20}
                        ]}>Imagen</Text>
                        <Button
                            title='Seleccionar de galería'
                            onPress={selectImage}
                        />
                        <Text></Text>
                        <Button
                            title='Tomar foto'
                            onPress={takePicture}
                        />
                        <Image 
                            style={{
                                alignSelf: 'center',
                                width: 100,
                                height: 100,
                                marginVertical: 30
                            }}
                            source ={{uri : image}}
                            
                        >
                            
                        </Image>


                        <Text style={loginStyles.label}>Username</Text>
                        <TextInput
                            placeholder='Ingrese su nombre de Usuario'
                            placeholderTextColor = 'rgba(255,255,255,0.4)'
                        
                            underlineColorAndroid="white"
                            style = {[
                                        loginStyles.inputField,
                                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                    ]}
                            selectionColor='white'
                            onChangeText={ (value) => onChange(value, 'username')}
                            value = {username}  
                            onSubmitEditing={onRegister}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <Text style={loginStyles.label}>Email</Text>
                        <TextInput
                            placeholder='Ingrese su email'
                            placeholderTextColor = 'rgba(255,255,255,0.4)'
                            keyboardType='email-address'
                            underlineColorAndroid="white"
                            style = {[
                                        loginStyles.inputField,
                                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                    ]}
                            selectionColor='white'
                            onChangeText={ (value) => onChange(value, 'email')}
                            value = {email}  
                            onSubmitEditing={onRegister}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        <Text style={loginStyles.label}>Contraseña</Text>
                        <TextInput
                            placeholder='Ingrese su contraseña'
                            placeholderTextColor = 'rgba(255,255,255,0.4)'
                            
                            underlineColorAndroid="white"
                            style = {[
                                        loginStyles.inputField,
                                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                    ]}
                            selectionColor='white'
                            onChangeText={ (value) => onChange(value, 'password')}
                            value = {password}     
                            secureTextEntry
                            onSubmitEditing={onRegister}  
                        />

                        {/*Button Login */}
                        <View 
                            style = {loginStyles.buttonContainer}
                        >
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style = {loginStyles.button}
                                onPress = {onRegister}
                            >
                                <Text style = {loginStyles.buttonText}>Registrarse</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {loginStyles.newUserContainer}>
                                    <TouchableOpacity
                                        activeOpacity={.8}
                                        onPress ={()=>{navigation.replace('LoginScreen')}}
                                    >
                                        <Text style = {loginStyles.buttonText}>¿Ya tienes una cuenta?</Text>
                                    </TouchableOpacity>
                        </View>
                    </View>
                    {/* 
                    <TextInput 
                        style = {styles.inputStyle}
                        placeholder='nombre'
                    />
                    <TextInput 
                        style = {styles.inputStyle}
                    />
                    <TextInput 
                        style = {styles.inputStyle}
                    />
                    <TextInput 
                        style = {styles.inputStyle}
                    />
                    <TextInput 
                        style = {styles.inputStyle}
                    /> */}
                    <CustomAlert
                        alertTitle = "Alerta"
                        message = "Esta es una alerta"
                        buttons = {[
                            {
                                text: 'Cancelar',
                                onPress: () => console.log('Cancel Pressed'),
                            
                            },
                            { text: 'OK', onPress: () => console.log('OK Pressed') }
                        ]}
                        buttonText = "Aceptare"
                    />  
                </View >
            </ScrollView>
            
        </KeyboardAvoidingView>
            
            
            
        );
};

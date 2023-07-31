import React, { useEffect } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Input from "../Components/Input.js"
import { Dimensions } from 'react-native';
import axios from 'axios';
import Button from "../Components/Button.js"
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Login(props) {
    const [textNumber, onChangeTextNumber] = React.useState('');
    const [validation, setValidation] = React.useState();
    const [textName, onChangeTextName] = React.useState('');
    const [NumPasaporte, setNumPasaporte] = React.useState("")
    const [isLoading, setLoading] = React.useState(true)
    const onPress = () => {
      setValidation(false);
      axios.get("http://localhost:3000/users")
      .then(function (response) {
        const usuariosArr = response.data
        validar(usuariosArr)
      })
      .finally(() => setLoading(false))
    }
    const validar = usuariosArr => {
      console.log("hola")
        usuariosArr.forEach(element => {
          console.log(element)
          if (element.NombreCompleto === textName && element.NumPasaporte === textNumber ) {
            setValidation(true)
            setNumPasaporte(element.NumPasaporte)
          }
      });  
    }
    React.useEffect( () => {
      if (validation) {
        props.navigation.navigate('Tu Cronograma', {NumPasaporte: NumPasaporte})
      }
    }, [isLoading])
    return (
      <View style={styles.container}>
        <Input nombreLabel="Nombre Completo" text={textName} setText={onChangeTextName}></Input>
        <Input nombreLabel="N° Pasaporte" text={textNumber} setText={onChangeTextNumber}></Input>
        { isLoading ? null : !validation ? <Text style={styles.texto}><MaterialCommunityIcons name="alert" size={24} color="red" />Error, el nombre o el numero de pasaporte no coinciden.</Text> : null}
        <Button
          style={styles.boton}
          title='Iniciar Sesion'
          onPress={onPress}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EEEEEE',
      alignItems: 'center',
      width: windowWidth,
      height: windowHeight,
      justifyContent: 'center'
    },
    boton: {
      borderRadius: 200,
      backgroundColor: 'red'
    },
    texto: {
      color: '#F72323'
    }
  });
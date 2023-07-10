import React, { useEffect } from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import Input from "../Input/Input.js"
import axios from 'axios';

export default function Login(props) {
    const [textNumber, onChangeTextNumber] = React.useState('');
    const [validation, setValidation] = React.useState();
    const [textName, onChangeTextName] = React.useState('');
    const [NumPasaporte, setNumPasaporte] = React.useState("")
    const onPress = () => {
      setValidation(false);
      axios.get("http://localhost:3000/users")
      .then(function (response) {
        const usuariosArr = response.data
        validar(usuariosArr)
        console.log(NumPasaporte)
      })
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
    }, [validation])
    return (
      <View style={styles.container}>
        <Input nombreLabel="Nombre Completo" text={textName} setText={onChangeTextName}></Input>
        <Input nombreLabel="N° Pasaporte" text={textNumber} setText={onChangeTextNumber}></Input>
        { validation ? <Text>Hola</Text> : <Text>Error</Text>}
        <Button
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
      justifyContent: 'start',
    },
  });
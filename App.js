import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import Input from "./Input/Input.js"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

function Login(props) {
  const [textNumber, onChangeTextNumber] = React.useState('');
  const [validation, setValidation] = React.useState();
  const [textName, onChangeTextName] = React.useState('');
  const onPress = () => {
    setValidation(false);
    axios.get("http://localhost:3000/users")
    .then(function (response) {
      const usuariosArr = response.data
      validar(usuariosArr)
    })
  }
  const validar = usuariosArr => {
    console.log("hola")
      usuariosArr.forEach(element => {
        console.log(element)
        if (element.NombreCompleto === textName && element.NumPasaporte === textNumber ) {
          setValidation(true)
        }
    });  
  }
  React.useEffect( () => {
    if (validation) {
      props.navigation.navigate('Tu Cronograma')
    }
  }, [validation])
  return (
    <View style={styles.container}>
      <Input nombreLabel="Nombre Completo" text={textName} setText={onChangeTextName}></Input>
      <Input nombreLabel="N° Pasaporte" text={textNumber} setText={onChangeTextNumber}></Input>
      { validation ? null : <Text>Error</Text>}
      <Button
        title='Iniciar Sesion'
        onPress={onPress}
      />
    </View>
  );
}

function Itinerario() {
  return (
    <View>
      <Text>Hola</Text>
    </View>
  );
}


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tu Cronograma" component={Itinerario} style={styles.navbar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'start',
  },
  navbar: {
    
  }
});

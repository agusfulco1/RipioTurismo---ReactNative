import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import Input from "./Input/Input.js"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Login(props) {
  const onPress = () => {
    props.navigation.navigate('Itinerario');
  }
  return (
    <View style={styles.container}>
      <Input nombreLabel="Nombre Completo"></Input>
      <Input nombreLabel="N° Pasaporte"></Input>
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
        <Stack.Screen name="Itinerario" component={Itinerario} />
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
});

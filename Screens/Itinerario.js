import React, { useEffect } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';
import Separator from '../Components/Separator'

export default function Itinerario({route}) {
    const [actividades, setActividades] = React.useState()
    const [loading, setLoading] = React.useState(false)
    const {NumPasaporte} = route.params

    console.log(NumPasaporte)
    React.useEffect(() => {
      axios.get('http://localhost:3000/activities/' + NumPasaporte )
      .then(function (response) {
        setActividades(response.data)
        console.log(response.data)
      })
      .finally(() => setLoading(true))
    }, [])
    return (
      <View>
        {!loading ? (
          <Text>Loading...</Text>
        ) : (
          actividades.map((obj) => {
            return (
              <View key={obj.idActividad}>
                <View style={styles.Actividad}>
                  <View style={box}> 
                    <Text>{obj.Nombre}</Text>
                    <Text>{obj.Descripcion}</Text>
                  </View>
                  <Text style={styles.texto}> Dia {obj.Duracion}</Text>
                </View>
                <Separator></Separator>
              </View>
            );
            
          })
        )} 
  
      </View>
    );
}

const styles = StyleSheet.create({
  Actividad: {
    flexDirection: 'row',
    width: "100%",
  },
  texto: {
    fontSize: 50,
  },
  box: {
    width
  }
});
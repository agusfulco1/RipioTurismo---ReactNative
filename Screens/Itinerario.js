import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

export default function Itinerario({route}) {
    const [actividades, setActividades] = React.useState()
    const [loading, setLoading] = React.useState(false)
    const {NumPasaporte} = route.params
    console.log(NumPasaporte)
    React.useEffect(() => {
      axios.get('http://localhost:3000/activities/' + NumPasaporte )
      .then(function (response) {
        setActividades(response.data)
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
                <Text>{obj.Nombre}<Text>{obj.Duracion}</Text></Text>
                <Text>{obj.Descripcion}</Text>
              </View>
            );
            
          })
        )} 
  
      </View>
    );
  }
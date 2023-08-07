import Itinerario from './Itinerario'
import { createStackNavigator } from 'react-navigation-stack';

const Stack = createStackNavigator()
export default function HomeStack() {
   
    return (
      <Stack.Navigator>
         <Stack.Screen name="HomeScreen" component={Itinerario} />
      </Stack.Navigator>
    )
}


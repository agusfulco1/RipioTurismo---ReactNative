import Bot from '../Screens/Bot'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../Screens/Login"
import Itinerario from '../Screens/Itinerario'

const Stack = createNativeStackNavigator()
export default function Stackk() {
   
    return (
      <Stack.Navigator >
        <Stack.Screen name="LoginScreen" component={Login} />
      </Stack.Navigator>
    )
}
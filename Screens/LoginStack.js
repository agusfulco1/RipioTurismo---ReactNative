import Login from "./Login"
import { createStackNavigator } from 'react-navigation-stack';

const Stack = createStackNavigator()
export default function LoginStack() {
   
    return (
      <Stack.Navigator initialRouteName="LoginScreen">
         <Stack.Screen name="LoginScreen" component={Login} />
      </Stack.Navigator>
    )
}


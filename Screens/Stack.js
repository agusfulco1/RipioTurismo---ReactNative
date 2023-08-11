import Bot from './Bot'
import { createStackNavigator } from 'react-navigation-stack';


const Stack = createStackNavigator()
export default function BotStack() {
   
    return (
      <Stack.Navigator>
         <Stack.Screen name="BotStack" component={Bot} />
      </Stack.Navigator>
    )
}
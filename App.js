import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Pantallas
import Login from './Screens/Login'
import Itinerario from './Screens/Itinerario'
import Bot from './Screens/Bot'

//Nombres de las pantallas
const homeName = "Home";
const chatName = "Chat";

const Tab = createBottomTabNavigator();

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Itinerario}/>
        <Stack.Screen name="Chat" component={Bot}/>
      </Stack.Navigator>
      <Tab.Navigator
        initialRouteName='Login' 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              console.log(route.name)
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'home-outline' : 'home';

              } else if (rn === chatName) {
                iconName = focused ? 'chatbox-outline' : 'chatbox';

              } 
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'orange',
            inactiveTintColor: 'orange',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
          }}>
      <Tab.Screen name={homeName} component={Itinerario} />
      <Tab.Screen name={chatName} component={Bot} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}



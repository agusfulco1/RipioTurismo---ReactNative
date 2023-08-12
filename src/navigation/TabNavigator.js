import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from "../Screens/Login"
import Itinerario from "../Screens/Itinerario"
import Bot from "../Screens/Bot";
import Stackk from "./Stack";
const Tab = createBottomTabNavigator() 

const homeName = "Home";
const chatName = "Chat";
export function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='Login' 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
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
            <Tab.Screen name="Login" component={Stackk}/>
            <Tab.Screen name={homeName} component={Itinerario} />
            <Tab.Screen name={chatName} component={Bot} />
        </Tab.Navigator>
    );
}
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Itinerario from "../Screens/Itinerario"
import Bot from "../Screens/Bot";
import { UserContext } from '../Context/UserContext'

const Tab = createBottomTabNavigator() 

const homeName = "Home";
const chatName = "Chat";
export default function TabNavigator({route}) {
    const {NumPasaporte} = route.params
    return (
        <UserContext.Provider value={NumPasaporte}>
        <Tab.Navigator
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
                headerShown: false,
                style: { padding: 10, height: 70}
            }}>
                <Tab.Screen initialParams={NumPasaporte} name={homeName} component={Itinerario} />
                <Tab.Screen name={chatName} component={Bot} />
        </Tab.Navigator>
        </UserContext.Provider>
    );
}
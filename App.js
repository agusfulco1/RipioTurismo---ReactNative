import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './Screens/TabNavigator';





export default function App() {

  return (
      <NavigationContainer>
         <TabNavigator />
       </NavigationContainer>
    );
  }



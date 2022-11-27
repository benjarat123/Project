import { View, Text, Settings } from 'react-native'
import React from 'react'
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page0 from './screens/Page0';
import Des1 from './screens/Des1';
import Des2 from './screens/Des2';
import Des3 from './screens/Des3';
import Des4 from './screens/Des4';
import Page4 from './screens/Page4';
import Homescreen from './screens/Homescreen';
import Cal from './screens/Cal';
import save from './screens/save';
import follow from './screens/follow';
import setting from './screens/setting';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="Homescreen"
      component={Homescreen}
      options={{ headerShown: false}}
      />
      <Stack.Screen 
      name="Home"
      component={Home}
      options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Page0"
        component={Page0}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page1"
        component={Page1}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Page2"
        component={Page2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page3"
        component={Page3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Page4"
        component={Page4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Des1"
        component={Des1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Des2"
        component={Des2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Des3"
        component={Des3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Des4"
        component={Des4}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
      name="Cal"
      component={Cal}
      options={{ headerShown: false}}
      />
      <Stack.Screen 
      name="save"
      component={save}
      options={{ headerShown: false}}
      />
      <Stack.Screen 
      name="follow"
      component={follow}
      options={{ headerShown: false}}
      />
      <Stack.Screen 
      name="setting"
      component={setting}
      options={{ headerShown: false}}
      />
       {/*<Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App
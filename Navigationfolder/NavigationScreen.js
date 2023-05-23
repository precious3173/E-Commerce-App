import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import SplashScreen from './Screens/SplashScreen'
import LoginScreen from './Screens/LoginScreen'



const Stack = createNativeStackNavigator();

const NavigationScreen = () =>{
return(
    <NavigationContainer>
    
    <Stack.Navigator>
      <Stack.Screen
      name = "SplashScreen"
      component = {SplashScreen}
      
      />
       <Stack.Screen
      name = "LoginScreen"
      component = {LoginScreen}
      
      />

    </Stack.Navigator>
    </NavigationContainer>
);
};

export default NavigationScreen

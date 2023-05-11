import * as React from 'react'
import { SafeAreaView } from 'react-native';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './Screens/HomeScreen';
import Itemscreen from './Screens/Itemscreen';
import ProfileScreen from './Screens/ProfileScreen';


// Screen names
const homeName = 'Home';
const profileName = 'Profile';
const itemName = 'Items'


const Tab = createBottomTabNavigator();

function Navbar(){

return(

    <NavigationContainer>

        <Tab.Navigator
        initialRouteName = {homeName}
        screenOptions = {({route}) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if(rn === homeName){
                            iconName = focused? 'home': 'home-outline'
                        }
                        else if (rn === profileName){
                         iconName = focused? 'person' : 'person-outline'

                        }else if (rn === itemName){
                            iconName = focused? 'list' : 'list-outline'
   
                           }
                           return <Ionicons name= {iconName} size ={size}
                           color={color}
                           />
                    },
                })}

                tabBarOptions = {{
                    activeTintColor : "red"

                }} 
        >

           <Tab.Screen name ={ homeName} component = {HomeScreen}/>
           <Tab.Screen name ={ profileName} component = {ProfileScreen}/>
           <Tab.Screen name ={ itemName} component = {Itemscreen}/>




        </Tab.Navigator>
    </NavigationContainer>
   
);


}

export default Navbar;
import * as React from 'react'
import { View, Text } from 'react-native'


export default function HomeScreen(navigation){

    return (

        <View styles ={
            {backgroundColour: 'red'}
        }>
         
      <Text
      onPress= {
        ()=> alert(
            'Welcome Home'
)
    } 
      >
        Home
        
      </Text>
        </View>
    );

}
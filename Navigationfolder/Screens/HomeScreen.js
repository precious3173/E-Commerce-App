import * as React from 'react'
import { View, Text} from 'react-native'

export default function HomeScreen(navigation){

    return (

        <View styles ={ 
            
            {flex: 1, alignItem: 'Center', justifyContent:'center', backgroundColour: 'red'}
        }>
        <View>
        <Text
     
     style ={{fontSize: 60, fontWeight: 'bold'}}
      resizeMode = 'center'
      onPress= {
        ()=> alert(
            'Welcome Home'
)
    } 
      >
      
      Happy NYSC Celebration. 
      
      
      Chinonso Victoria.



      </Text>
            
            </View> 
      
        </View>
    );

}
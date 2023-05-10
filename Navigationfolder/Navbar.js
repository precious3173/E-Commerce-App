import * as React from 'react'
import { SafeAreaView } from 'react-native';
import { View, Text } from 'react-native';

function Navbar(){

return(

    <SafeAreaView>
          <View styles ={
            {flex:1, alignItems: 'center', justifyContent: 'center'}
        }>
         
      <Text
      onPress= {
        ()=> navigation.navigate('Home')
    }
      >
        Hello World
      </Text>
        </View>
    </SafeAreaView>
   
);


}

export default Navbar;
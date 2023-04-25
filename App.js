import React from 'react';
import {Image, View} from "react-native"



//alt + arrow

export default function App() {

  
return (
    <View flex = {1} style ={ {backgroundColor: 'red'}}>
<Image
flex={1}
source = {require ('./assets/anime.jpg')}
/>

<View
w ="full"
h = "full"
position = "absolute"
top = "0"
px ="6"
justifyContent = "center">

<Heading>
    SIGN IN
</Heading>
</View>
</View>
 
  );
}




import {Box, Image, Text, View} from "native-base"
import React from "react"


function LoginScreen(){

    return(
<Box flex = {1} style ={ {backgroundColor: 'red'}}>
<Image
flex={1}
source = {require ('./assets/anime.jpg')}
/>
</Box>


    );
}
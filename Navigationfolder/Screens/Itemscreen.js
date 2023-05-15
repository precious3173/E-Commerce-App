import { useState } from "react";
import { View, Text } from "react-native";

export default function Itemscreen(navigation){

  const [names, setNames] = useState([

    {name: 'Precious', key: '1'},
    {name: 'Ijeoma', key: '2'},
    {name: 'Peter', key: '3'},
    {name: 'Divine', key: '4'},


  ]);
    return (

        <View styles ={
            {flex:1, alignItems: 'center', justifyContent: 'center'}
        }>
          {names.map((item) =>{

           return(
            <View>
              <Text>{item.name}</Text>
            </View>
           )
          })}

        </View>
    );

}
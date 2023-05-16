import { ScrollView } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";


export default function Itemscreen(navigation){

  const [names, setNames] = useState([

    {name: 'Precious', key: '1'},
    {name: 'Ijeoma', key: '2'},
    {name: 'Peter', key: '3'},
    {name: 'Divine', key: '4'},


  ]);
    return (

      <ScrollView>

<View styles ={
            {flex:1, alignItems: 'center', justifyContent: 'center'}
        }>
          {names.map((item) =>{

           return(
            <View >
              <Text style= {styles.item}>{item.name}</Text>
            <View>

              <Image
              source={ require('./assets/anime.jpg')}
              />
            </View>
            </View>
           )
          })}

        </View>
      </ScrollView>
       
    );

}

const styles = StyleSheet.create({

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink'
  }
});
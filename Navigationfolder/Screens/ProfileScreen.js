import { ScrollView } from "native-base";
import { View, Text, SafeAreaView } from "react-native";

export default function ProfileScreen(navigation){

    return (

        <SafeAreaView styles ={
        styles.container
        }>
         
        <ScrollView>


        </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({

    container:{
      flex:1,
      backgroundColor: '#fff',
      padding: 20  
    },
    header: {
        backgroundColor: 'pink',
        padding: 20
    }
})
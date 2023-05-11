import { ScrollView } from "native-base";
import { View, Text, SafeAreaView } from "react-native";

export default function ProfileScreen(navigation){

    return (

        <SafeAreaView styles ={
            {flex:1, alignItems: 'center', justifyContent: 'center'}
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
    }
})
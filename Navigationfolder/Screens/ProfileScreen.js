import { View, Text } from "react-native";

export default function ProfileScreen(navigation){

    return (

        <View styles ={
            {flex:1, alignItems: 'center', justifyContent: 'center'}
        }>
         
      <Text
      onPress= {
        ()=> alert(
            'My Profile'
)
    }
      >
        Profile
        
      </Text>
        </View>
    );

}
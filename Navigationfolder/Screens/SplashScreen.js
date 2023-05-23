import { Button, View, Text } from "native-base"

const SplashScreen = ({navigation}) =>{

return(

    <View>
<Button
    title = "Get Started"
    color={"pink"}
    onPress={() =>
    navigation.navigate('LoginScreen', {name: 'LoginScreen'})

    }
    />

    <Text>
        HelloWorld
    </Text>

    </View>
    
);
};
    
    
export default SplashScreen
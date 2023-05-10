export default function Itemscreen(navigation){

    return (

        <View styles ={
            {flex:1, alignItems: 'center', justifyContent: 'center'}
        }>
         
      <Text
      onPress= {
        ()=> navigation.navigate('Home')
    }
      >
        Item Screen
      </Text>
        </View>
    );

}
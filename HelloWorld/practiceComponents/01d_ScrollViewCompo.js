import { View,Text,Image,ImageBackground,ScrollView, TextInput } from "react-native";

const logoImg=require("../assets/favicon.png")
export default function ScrollViewComponent(){
return( 
    <View style={{flex:1,backgroundColor:"plum",padding:20}}>
    <ScrollView showsVerticalScrollIndicator={false} >
    <Image source={logoImg} style={{width:300,height:300}}/>
    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Text>
    <Image source={logoImg} style={{width:300,height:300}}/>
    <Image source={logoImg} style={{width:300,height:300}}/>
    <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
        placeholder="Type here..."
        onChangeText={(inputText) => setText(inputText)}
      />
    </ScrollView>
</View>
);
}
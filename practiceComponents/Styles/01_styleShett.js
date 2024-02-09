import { View,Button,ScrollView,Text,StyleSheet } from "react-native";
export default function StyleShhetApi(){
return( 
    <View style={styles.container}>
    <Text style={styles.title}>StyleSheet Api</Text>
    </View>
   );
}
const styles=StyleSheet.create({
container:{flex:1,backgroundColor:"plum",padding:60},
title:{}
})
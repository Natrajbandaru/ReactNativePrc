import { SafeAreaView,Button,View,ScrollView,Switch,FlatList,Text,StyleSheet,Platform,StatusBar, SectionList, TextInput } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
// WE can Navigate By UseNavegator(only particular screen) Hook and Navigation Prop(All for the screen)
export default function HomeScreen({route}){
    const navigation=useNavigation();
    //const {nav}= route.params.result;
   // alert(JSON.stringify(route.params))
    return( 
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <Text style={styles.text}>Home Screen{route.params?.result}</Text>

        <Button title="Go About" onPress={()=>navigation.navigate("About",{
            name:"vishwas"
        })}></Button>

    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5f5f5",
    paddingTop:StatusBar.currentHeight,
  },
  text:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:16
  }
  
})



import { SafeAreaView,View,ScrollView,Switch,FlatList,Text,StyleSheet,Platform,StatusBar, SectionList, TextInput, Button } from "react-native";
import { useState } from "react";
import { useLayoutEffect } from "react";

export default function AboutScreen({route,navigation}){
const {name} = route.params;

// For rendering a Dynamic  Title in screen 
useLayoutEffect(()=>{
    navigation.setOptions({
        title:name
    },[navigation,name])
})
  return( 
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>About Screen {name}</Text>
        <Button title="Update Name" onPress={()=>navigation.setParams({
            name:"codevaluation"
        })}/>
     <Button title="Go Home" onPress={()=>navigation.navigate("Home",
       {result:"Natraj From About"}
     )}/>

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



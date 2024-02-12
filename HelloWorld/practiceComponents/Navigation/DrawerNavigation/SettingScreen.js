import { SafeAreaView,View,ScrollView,Switch,FlatList,Text,StyleSheet,Platform,StatusBar, SectionList, TextInput } from "react-native";
import { useState } from "react";

export default function SettingScreen(){

  return( 
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Setting Screen</Text>
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



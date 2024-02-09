import { SafeAreaView,View,ScrollView,Switch,FlatList,Text,StyleSheet,Platform,StatusBar, SectionList, TextInput } from "react-native";
import { useState } from "react";

export default function App(){

  const[ isDarkMode,setIsDarkMode] =useState(false);
  return( 
    <SafeAreaView style={styles.container}>
    
      <View style={styles.switchCompnent}>
          <Switch
               value={isDarkMode}
               onValueChange={()=>setIsDarkMode((prevState)=> !prevState)}
               trackColor={{false:"red",true:"green"}}
               thumbColor="orange"
           />
      </View>
    
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5f5f5",
    paddingTop:StatusBar.currentHeight,
  },
  
  switchCompnent:{
    flexDirection:"row",
    alignItems:"row",
    justifyContent:"space-between",
    padddingHorizontal:10,
  }
  
})



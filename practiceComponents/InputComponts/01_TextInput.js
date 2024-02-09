import { SafeAreaView,View,ScrollView,Switch,FlatList,Text,StyleSheet,Platform,StatusBar, SectionList, TextInput } from "react-native";
import { useState } from "react";

export default function App(){
  const[name,setName]= useState("");

  const[ isDarkMode,setIsDarkMode] =useState(false);
  return( 
    <SafeAreaView style={styles.container}>
      <TextInput  style={styles.input} value={name}  onChangeText={setName}
        placeholder="Email@.com"
        secureTextEntry
        keyboardType="numeric"
        autoCorrect={false}
        autoCapitalize="none"
      />
       <TextInput  style={[styles.input,styles.multilineText]} value={name}  onChangeText={setName}
        placeholder="Email@.com"
        multiline
        
      />
      <Text  style={styles.text} >My name is {name}</Text>
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
  input:{
    height:40,
    margin:12,
    padding:10,
    borderWidth:1
  },
  text:{
     fontSize:20,
  }, 
  multilineText:{
    minHeight:100,
    textAlignVertical:"top",
    
    
  },
  switchCompnent:{
    flexDirection:"row",
    alignItems:"row",
    justifyContent:"space-between",
    padddingHorizontal:10,
  }
  
})



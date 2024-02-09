import {Image,KeyboardAvoidingView, SafeAreaView,View,Button,ScrollView,Switch,FlatList,Text,StyleSheet,Platform,StatusBar, SectionList, TextInput } from "react-native";
import { useState } from "react";

export default function App(){
      
   const[userName,SetUserName]=useState("");
   const[password,SetPassword]=useState("")

   return( 
    <KeyboardAvoidingView styles={styles.container}
      keyboardVerticalOffset={100}
    >
      <View style={styles.form}>
         <Image source={"./assets/favicon.png"}
           style={styles.image}
         />
         <Text style={styles.label}>UserName</Text>
         <TextInput placeholder="Enter UserName"
          style={styles.input}
          value={userName}
          onChangeText={SetUserName}          
          />
         <Text style={styles.label}
            value={password}
            onChangeText={SetPassword}  
         >Password</Text>
         <TextInput placeholder="Enter UserName"
          secureTextEntry  style={styles.input}/>
         <Button title="Button" onPress={()=>{}}/>
      </View>

    </KeyboardAvoidingView>
   
  );
}

const styles=StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"#f5f5f5",
      paddingHorizontal:20,
      justifyContent: 'center', 
      alignItems: 'center', 
    },
  form:{
      backgroundColor:"white",
      padding:20,
      borderRadius:10,
      shadowColor:"black",
      shadowOffset:{
        width:0,
        height:2
      },
      shadowOpacity:0.25,
      shadowRadius:4,
      elevation:5,
      margin:10,
      marginTop:250
      
  },
  label:{
      fontSize:16,
      marginBottom:5,
      fontWeight:"bold"
  },
  input:{
    height:40,
    borderColor:"#ddd",
    borderWidth:1,
    marginBottom:15,
    padding:10,
    borderRadius:5
  }

})



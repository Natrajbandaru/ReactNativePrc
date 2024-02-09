import { View,Button,ScrollView,Text,Image,Pressable } from "react-native";
import React from "react";

const logoImg=require("../assets/favicon.png")
export default function PressabelCompo(){
return( 
    <View style={{flex:1,backgroundColor:"plum",padding:40}}>
        <View style={{flex:1,backgroundColor:"plum",padding:20}}>
            <ScrollView >
                <Pressable onPress={()=> console.log("ImagePress")}>
                   <Image source={logoImg} style={{width:300,height:300}}/>
                </Pressable>
            </ScrollView>
        </View>
   </View>
  );
}
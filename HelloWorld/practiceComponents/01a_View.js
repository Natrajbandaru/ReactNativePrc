import React from "react";
import {View,Text} from "react-native";

var CoreComponentView=()=>{
    return(
        <View style={{flex:1,backgroundColor:"plum"}}>
            <View 
                style={{backgroundColor:"lightblue",width: 200,height:200}}>
                <Text style={{textAlign:"center",alignContent:"center",padding:50}}>Hello</Text>
            </View>
            <View 
                style={{backgroundColor:"lightgreen",width: 200,height:200}}>
                <Text style={{textAlign:"center",alignContent:"center",padding:50}}>Hello</Text>
            </View>
       </View>
    );
}

export default CoreComponentView;
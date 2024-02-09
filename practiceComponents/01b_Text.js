import React from "react";
import {View,Text} from "react-native";

export default TextCompo =()=>{
    return(
        <View style={{flex:1,backgroundColor:"plum",padding:40}}>
            <Text> Hello 
                <Text style={{color:"white" }}>
                    World
                </Text>
            
            </Text>
        </View>
    );
}
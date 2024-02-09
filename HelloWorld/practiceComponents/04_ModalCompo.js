import React, { useState } from "react";

import { View,Button,ScrollView, Modal,Text } from "react-native";


const logoImg=require("../assets/favicon.png")

export default function ModalViewData(){
const [isModalVisabile,setIsModalVisabel]=useState(false);
return( 
    <View style={{flex:1,backgroundColor:"plum",padding:40}}>
    <ScrollView >
        <Button  
        title="Press" 
        onPress={()=>{setIsModalVisabel(true)}} 
        color="midnightblue"
        />   
        <Modal 
        visible={isModalVisabile} 
        onRequestClose={()=>setIsModalVisabel(false)}
        animationType="slide"
        presentationStyle="formSheet"
        >
            <View style={{flex:1,backgroundColor:"lightblue",padding:60}}> 
            <Text>Modal Contant</Text>
            <Button title="close" color="midnightblue" onPress={()=>{setIsModalVisabel(false)}}></Button>
            </View>
        </Modal>
    </ScrollView>        
</View>
);
}

import React from "react";
import {View,Image,ImageBackground,Text,ScrollView} from "react-native"

export default ImageComponent =()=>{
    const imagePath=require("../assets/favicon.png")
    return (
        <View>
          <ScrollView   >
            <Image source={imagePath} style={{width:300,height:300,alignContent:"center"}}/>
            <Image source={{uri:"https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?rs=1&pid=ImgDetMain"}}
                style={{width:300,height:300,marginTop:20}}
            />
            <ImageBackground source={{uri:"https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?rs=1&pid=ImgDetMain"}}
                style={{width:300,height:300,marginTop:20}}
            >
                <Text>Image is in the Backgrounds</Text>
            </ImageBackground>
          </ScrollView>
        </View>
    );
}
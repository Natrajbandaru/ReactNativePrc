import { View,StyleSheet,Text,Dimensions } from "react-native";
import { useState,useEffect } from "react";


export default function App(){
    const [dimensions,setDimensions]=useState({
      window:Dimensions.get("window")
    })

    useEffect(() => {
      const subscription = Dimensions.addEventListener('change', (newDimensions) => {
        setDimensions(newDimensions);

        // const {window} =dimensions;
        // console.log("H: "+window.height+"  we:  "+window.width);
      });
      return () => subscription.remove();
    }); 
    

    const {window} =dimensions;
    const windowWidth=window.width;
    const windowHight=window.height;
    // console.log("H2: "+dimensions.height+"  we2:  "+dimensions.width);
    // console.log("H3: "+windowHight+"  we3:  "+windowWidth);


  return( 
      // <View style={{backgroundColor:"plum", flex:1}}></View>
     <View style={styles.container}>
      <View style={[styles.box,{ width:windowWidth >500 ? "70%" : "90%",
                     height:windowHight >600 ?"60%":"70%"}]}>
        <Text style={{fontSize:windowWidth>500? 50 : 24}}>Welcome!</Text>
      </View>
     </View>
  );
}
// Scrren : well get entire screen with battery and hotspot
// window: well get UI with leaving a battery and wifi
// const windowWidth=Dimensions.get("window").width;
// const windowHight=Dimensions.get("window").height;

// console.log("H: "+dimensions.height+"  we:  "+dimensions.width);



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"plum",
    alignItems:"center",
    justifyContent:"center"
  },
  box:{
    // width:windowWidth >500 ? "70%" : "90%",
    // height:windowHight >600 ?"60%":"70%",
    backgroundColor:"lightblue",
    justifyContent:"center",
    alignItems:"center"
  },
  // text:{
  //     fontSize:24,
  //     textAlign:"center"
  // }
})


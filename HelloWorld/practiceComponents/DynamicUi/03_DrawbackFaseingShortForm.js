import { View,StyleSheet,Text,useWindowDimensions } from "react-native";


export default function DrawBackSmall(){

   const windowWidth=useWindowDimensions().width;
   const windowHight=useWindowDimensions().height;
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


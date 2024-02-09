import { View,StyleSheet,Text,Dimensions } from "react-native";

export default function App(){
  return( 
      // <View style={{backgroundColor:"plum", flex:1}}></View>
     <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>
     </View>
  );
}
// Scrren : well get entire screen with battery and hotspot
// window: well get UI with leaving a battery and wifi
const windowWidth=Dimensions.get("window").width;
const windowHight=Dimensions.get("window").height;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"plum",
    alignItems:"center",
    justifyContent:"center"
  },
  box:{
    width:windowWidth >500 ? "70%" : "90%",
    height:windowHight >600 ?"60%":"70%",
    backgroundColor:"lightblue",
    justifyContent:"center"
  },
  text:{
      fontSize:24,
      textAlign:"center"
  }
})


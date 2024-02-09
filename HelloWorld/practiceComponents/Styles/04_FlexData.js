import { View,StyleSheet } from "react-native";
import Box from "../../Components/Box";
export default function App(){
return( 
    // <View style={{backgroundColor:"plum", flex:1}}></View>
    <View style={styles.container}>
        <Box style={{backgroundColor:"red" ,flex:1}} >Box3</Box>
        <Box style={{backgroundColor:"green", flex:1}} >Box4</Box>
        <Box style={{backgroundColor:"orange",flex:1}} >Box5</Box>
        <Box style={{backgroundColor:"lightblue",flex:1}} >Box6</Box>
    </View>
);
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"plum",
    marginTop:20,
    borderWidth:6,
    borderColor:"black"
}
})

import { View,Button,ScrollView,Text,StyleSheet,StatusBar } from "react-native";

export default function ShadowStyles(){
return( 
    <View style={styles.container}>
    <StatusBar disabled/>
    <View style={[styles.lightBlueBox,styles.box,styles.boxShadow]}>
        <Text style={styles.title}>LightBlue Box</Text>
    </View>
    <View style={[styles.lightGreenBox,styles.box ,styles.androidShadow]}>
    <Text style={styles.title}>LightGreen Box</Text>
    </View>
    </View>
);
}
const styles=StyleSheet.create({
container:{padding:40,backgroundColor:"plum",flex:1},
box:{
    padding:5,
    height:250,
    width:250,
    borderWidth:2,
    borderColor:"black",
    marginStart:40
    
},
lightBlueBox:{ 
    backgroundColor:"lightblue"
},
lightGreenBox:{
    backgroundColor:"lightgreen"
},
boxShadow :{
    shadowColor:"red",
    shadowOffset:{
    width:6,
    height:6
    },
    shadowOpacity:0.6,
    shadowRadius:4,
},
androidShadow:{
    elevation:15
}

})
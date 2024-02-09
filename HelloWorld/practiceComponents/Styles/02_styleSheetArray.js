import { View,Button,ScrollView,Text,StyleSheet } from "react-native";
export default function App(){
return( 
    <View style={styles.container}>
    <View style={[styles.lightBlueBox,styles.box]}>
        <Text style={styles.title}>LightBlue Box</Text>
    </View>
    <View style={[styles.lightGreenBox,styles.box]}>
    <Text style={styles.title}>LightGreen Box</Text>
    </View>
    </View>
);
}
const styles=StyleSheet.create({
container:{padding:40,backgroundColor:"plum",flex:1},
box:{
    padding:10,
    height:100,
    width:120,
},
lightBlueBox:{ 
    backgroundColor:"lightblue"
},
lightGreenBox:{
    backgroundColor:"lightgreen"
}
})
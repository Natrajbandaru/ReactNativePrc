import { View,Button,ScrollView, Modal,Text,StatusBar,ActivityIndicator } from "react-native";
export default function App(){
return( 
<View style={{padding:40,flex:1,backgroundColor:"plum"}}>
    <ActivityIndicator />
    <ActivityIndicator size="large" color="red"/>
    <ActivityIndicator size="large" color="red" animating={true}/>
</View>
);
}
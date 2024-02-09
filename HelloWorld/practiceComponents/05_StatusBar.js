import { View,Button,ScrollView, Modal,Text,StatusBar } from "react-native";
    export default function StatusBarComp(){
        return( 
            <View style={{flex:1,backgroundColor:"plum"}}>
            <StatusBar backgroundColor="lightgreen" barStyle="dark-content"
                
            />
        </View>
        );
}
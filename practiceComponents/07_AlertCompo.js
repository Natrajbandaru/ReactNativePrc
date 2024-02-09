import { View,Button,ScrollView,Alert } from "react-native";
export default function App(){
//  function fun(){
//   Alert.alert("Invalid","message"[
//     {
//       text:'Cancel',
//       onPress:()=>{}
//     }
//   ])
// }
return( 
<View style={{padding:40,flex:1,backgroundColor:"plum"}}>
        <Button title="Alert" onPress={()=>Alert.alert("Invalid dd")}></Button>
        <Button title="Alert 2" onPress={()=>Alert.alert("Invalid dd","Dbs")}></Button>
        <Button title="Alert 3" onPress={()=>Alert.alert("Invalid dd Heading","Dbs incorect message",[
            {
            text:'Cancel',
            onPress:()=>console.log("Cancel pressed")
            },
            {
            text:'Ok',
            onPress:()=>console.log("Ok click")
            }
        ]
        )}></Button>
</View>
);
}
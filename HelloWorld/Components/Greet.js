import React from "react";
import {View,Text} from "react-native";


// export default function Greet({name,age}){
//     return(
//         <View>
//             <Text>Hello,{name}, {age}</Text>
//         </View>
//     )
// }

export default  Greet=({names,age})=>{
    return(
        <View>
            <Text>Hello,{names}, {age}</Text>
        </View>
    )
}
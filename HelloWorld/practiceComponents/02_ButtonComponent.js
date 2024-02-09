import React from "react";
import { Button ,View,TextInput} from "react-native";

import { useState } from "react";

export default ButtonComponentData =()=>{
    const [textData,setTextData] = useState('');
    // var [textArray,setTextArray] = useState<Array>([]);
    return(
        <View>
            <TextInput
               onChange={(inputText)=>{setTextData(inputText)}}
               value={textData}
               placeholder="..TypeHear"
               style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
            />
            <Button
               title="Submit" 
               onPress={()=>{console.log("My self")}}
               color="midnightblue"
               
            />
        </View>
    )
}



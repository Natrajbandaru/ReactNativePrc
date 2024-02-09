import { View,StyleSheet,Text,SafeAreaView,Platform } from "react-native";
import CustomButton from './practiceComponents/DynamicUi/Components/CustomButton/CustomButton';

export default function App(){
  return( 
    <SafeAreaView style={styles.safeAreaView}>
     <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome</Text>
        <CustomButton title="Press Me" onPress={()=>alert("Pressed")}/>
      </View>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView:{
    flex:1,
    backgroundColor:"plum"
  },
  container:{
    flex:1,
    backgroundColor:"plum",
    paddingTop :Platform.OS==="android"? 10: 0,
  },
  text:{
    fontSize:24,
    ...Platform.select({
      ios:{
        color:"purple",
        fontSize:24,
        fontStyle:"italic"
      },
      android:{
          color:"blue",
          fontSize:30,
          alignItem:"center",
      }
    }),
  },
  box:{
   padding:20
  }
})


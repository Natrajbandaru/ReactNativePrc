import { SafeAreaView,View,ScrollView,Text,StyleSheet,Platform,StatusBar } from "react-native";

import pokimanList from './Components/data.json'

export default function NormalList(){
  return( 
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      {
        pokimanList.map((pokimon)=>{
          return(
            <View style={styles.card} key={pokimon.id}>
               <Text style={styles.cardText}>{pokimon.type}</Text>
                <Text style={styles.cardText}>{pokimon.name}</Text>
             </View>
          );
        })
     }
     </ScrollView>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5f5f5",
    paddingTop:StatusBar.currentHeight,
  },
  scrollView:{
       paddingHorizontal:16,
  },
  card:{
       backgroundColor:"white",
       padding:16,
       borderColor:8,
       borderWidth:1,
       marginBottom:16
  },
  cardText:{
     fontSize:18
  }
})



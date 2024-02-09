import { SafeAreaView,View,ScrollView,FlatList,Text,StyleSheet,Platform,StatusBar } from "react-native";

import pokimanList from './Components/data.json'

export default function FlatListData(){
  return( 
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
      {
        pokimanList.map((pokimon)=>{
          console.log(pokimon.id)
          return(
            <View style={styles.card} key={pokimon.id}>
               <Text style={styles.cardText}>{pokimon.type}</Text>
                <Text style={styles.cardText}>{pokimon.name}</Text>
             </View>
          );
        })
     }
     </ScrollView> */}
     <FlatList 
            data={pokimanList}
            renderItem={({item})=>{
              console.log(item.id)
              return(
                <View style={styles.card} key={item.id}>
                   <Text style={styles.cardText}>{item.type}</Text>
                    <Text style={styles.cardText}>{item.name}</Text>
                 </View>
              );
            }}
            keyExtractor={(item,index)=>item.id.toString()}
           // horizontal
           ItemSeparatorComponent={<View style={{height:16}}/>}
           ListEmptyComponent={<Text>No Items Found</Text>}
           ListHeaderComponent={<Text style={styles.header}>Pokiman List</Text>}
           ListFooterComponent={<Text style={styles.header}>Pokiman List Bootom</Text>}
     />       
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
  },
  header:{
   textAlign:"center",
   fontSize:25,
   fontWeight:"bold"
  }
})



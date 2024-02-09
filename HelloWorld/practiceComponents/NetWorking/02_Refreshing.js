import { SafeAreaView,View,Button,ScrollView,Switch,ActivityIndicator,FlatList,Text,StyleSheet,Platform,StatusBar, SectionList, TextInput } from "react-native";
import { useState,useEffect } from "react";

export default function App(){
   const[postList, setPostList]= useState([]);
   const[loading,setLoading]= useState(true);
   const[refresh,setRefresh]= useState(false);

   

  const  fetchData = async (limit)=>{
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data =await response.json();
      console.log(data)
      setPostList(data);
      setLoading(false);
  }
  const handleRefresh=()=>{
    setRefresh(true);
    fetchData(20);
    setRefresh(false);
  }
  
  useEffect(()=>{
    fetchData(10);
  },[])
  if(loading){
    return(
      <SafeAreaView style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="red"></ActivityIndicator>
          <Text >..Loading</Text>
      </SafeAreaView>
    );
  }
   return(  
    <View style={styles.container}>
       <View style={styles.listContainer}>
          <FlatList data={postList}
              keyExtractor={(item,index)=>item.id.toString()}
             // keyExtractor={(item,index)=>item.id.toString()}
              ItemSeparatorComponent={<View style={{height:1}}></View>}
              refreshing={refresh}
              onRefresh={handleRefresh}
              renderItem={({item})=>{
                  return(
                    <View style={styles.viewContainer}>
                       <Text  style={styles.viewTitle}>{item.title}</Text>
                       <Text  style={styles.viewBody}>{item.body}</Text>     
                    </View>
                  )
              }}
          />
        </View>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"#f5f5f5",
      paddingTop:StatusBar.currentHeight
    },
    listContainer:{

    },
    viewContainer:{
      borderBlockColor:"black",
      borderWidth:1,
      backgroundColor:"white",
      margin:10,
      borderRadius:5
    },
    viewTitle:{
      fontSize:20,

    },
    loadingContainer:{
        flex:1,
        backgroundColor:"black",
        paddingTop:StatusBar.currentHeight,
        justifyContent:"center",
        alignItems:"center"
    }

})



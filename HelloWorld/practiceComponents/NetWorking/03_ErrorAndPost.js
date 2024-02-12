import { SafeAreaView,View,Button,ScrollView,Switch,ActivityIndicator,FlatList,Text,StyleSheet,Platform,StatusBar, SectionList, TextInput } from "react-native";
import { useState,useEffect } from "react";

export default function App(){
   const[postList, setPostList]= useState([]);
   const[loading,setLoading]= useState(true);
   const[refresh,setRefresh]= useState(false);

   const[postBody,setPostBody]= useState("");
   const[postTitle,setPostTitle]= useState("");
   const[isPosting,setIsPosting]= useState(false);
   const[error,setError]=useState("");

   

  const  fetchData = async (limit)=>{
    try{
      //setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data =await response.json();
      setPostList(data);
      setLoading(false);
    }catch(error){
      console.error(error);
      setError("Failed to fetch post list")
    }
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
  const addPost = async ()=>{
    try{
      setIsPosting(true)
      const response= await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          title:postTitle,
          body:postBody
        })
      })
      const newPost =await response.json();
      setPostList([newPost,...postList]);
      setPostTitle("");
      setPostBody("");
      setIsPosting(false);
    }catch(error){
        console.error(error);
        setError("Failed to add New Post")
    }
  }
   return(  
    <View style={styles.container}>
        {error ?(
          <View style={styles.errorContainer}>
              <Text>{error}</Text>
          </View>
        ):(
        <>
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputText} 
                placeholder="Post title"
                value={postTitle}
                onChangeText={setPostTitle}
            ></TextInput>
            <TextInput style={styles.inputText} 
                placeholder="Post Body"
                value={postBody}
                onChangeText={setPostBody}
            ></TextInput>
            <Button title={isPosting ? "Adding..." :"Add Post" } 
                onPress={addPost}
                disabled={isPosting}
                />
        </View>
        <View style={styles.listContainer}>
            <FlatList data={postList}
                keyExtractor={(item,index)=>item.id.toString()}
                ItemSeparatorComponent={<View style={{height:1}}></View>}
                ListHeaderComponent={<Text>Hello</Text>}
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
        </>
      )}
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
    },
    inputContainer:{
      justifyContent:"center",
      borderRadius:5,
      borderWidth:1,
      backgroundColor:"white",
      margin:10
    },
    inputText:{
      margin:10,
      marginBottom:3,
      borderWidth:1,
      borderRadius:5
    },
    errorContainer:{
        backgroundColor:"red",
        alignItems:"center",
        fontSize:50
    }
    

  

})



import React from "react";
import { View,StyleSheet,SafeAreaView,Platform,Text,Image } from "react-native";

const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };

export default CardComponent=({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses
   })=>{
   const {borderColor,emoji}= getTypeDetails(type);
    return(
       <View style={[styles.card  ,{borderColor}] }>
           <View style={[styles.mainHead]}>
               <Text style={styles.headText}>{name}</Text>
               <Text style={styles.hpText}>&#x2764;HP-{hp}</Text>
           </View>
           <Image source={image} 
             style={styles.img}
              accessibilityLabel={`${name} pokiman` }
             resizeMode="contain"
            >
            </Image>
            <View style={styles.mainBradge}>
                <View style={[styles.bradge,{borderColor}]}>
                    <Text style={styles.bradgeText}>
                    {emoji}
                        emoji
                    </Text>
                </View>
            </View>
            <View style={styles.movieContainer}>
                <Text>
                    <Text  style={styles.movieTextHeader}>Movies:</Text>
                    <Text style={styles.movieTextbody}>
                      {moves.join(",")}
                    </Text>
                </Text>
            </View>
            <View>
                <Text>
                    <Text style={styles.weknesHead}>
                       Weakness
                    </Text>
                    <Text style={styles.weknesBody}>
                     {weaknesses.join(",")}
                    </Text>
                </Text>
            </View>
       </View>
    );
}

const styles=StyleSheet.create({
    card:{
        backgroundColor:"white",
        borderWidth:2,
        borderRadius:15,
        marginBottom:8,
        padding:16,
        margin:16,
        justifyContent:"center",
        ...Platform.select({
            android:{
             elivation:56
            },
            ios:{
               shadowOffset:{width:2,height:2},
               shadowColor:"black",
               shadowOpacity:0.3,
               shadowRadius:4
            }
        }) 
    },
    mainHead:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:20
    },
    headText:{
        fontSize:20,
        fontWeight:"bold"        
    },
    img:{
        width:"100%",
        height:250,
        marginBottom:16
    },
    mainBradge:{
      flexDirection:"row",
      alignItems:"center",
      left:100,
      paddingVertical:6,
      marginBottom:15
    },
    bradge:{
      borderWidth:3,
      width:100,
      height:40,
      borderRadius:15,
      justifyContent:"center",
      alignItems:"center",
    },
    bradgeText:{
       fontWeight:"bold"
    },
    movieTextHeader:{
       fontSize:16,
       fontWeight:"bold"
    },
    movieTextbody:{
        fontSize:15
    },
    weknesHead:{
        fontSize:16,
        fontWeight:"bold"
    },
    weknesBody:{
        fontSize:15
    }

})
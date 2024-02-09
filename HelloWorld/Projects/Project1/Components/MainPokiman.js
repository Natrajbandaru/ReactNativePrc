import { SafeAreaView,View,ScrollView,StyleSheet,Platform } from "react-native";
import CardComponent from "./Projects/Project1/Components/CardComponent";

const charmanderData = {
  name: "Charmander",
  image: require("./Projects/Project1/assets/charmander.png"),
  type: "Fire",
  hp: 39,
  moves: ["Scratch", "Ember", "Growl", "Leer"],
  weaknesses: ["Water", "Rock"],
};
const squirtleData = {
  name: "Squirtle",
  image: require("./Projects/Project1/assets/squirtle.png"), // Replace with the actual image path
  type: "Water",
  hp: 44,
  moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
  weaknesses: ["Electric", "Grass"],
};

const bulbasaurData = {
  name: "Bulbasaur",
  image: require("./Projects/Project1/assets/bulbasaur.png"), // Replace with the actual image path
  type: "Grass",
  hp: 45,
  moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
};

const pikachuData = {
  name: "Pikachu",
  image: require("./Projects/Project1/assets/pikachu.png"), // Replace with the actual image path
  type: "Electric",
  hp: 35,
  moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
  weaknesses: ["Ground"],
};




export default function MainPokiman(){
  return( 
    <SafeAreaView style={styles.container}>
      <ScrollView>
       <CardComponent {...charmanderData}/>
       <CardComponent {...squirtleData}/>
       <CardComponent {...bulbasaurData}/>
       <CardComponent {...pikachuData}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"white",
      marginTop:Platform.OS==="android"?40:0
  }


})


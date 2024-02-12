import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import AboutScreen from './practiceComponents/Navigation/StackNavigator/Screens/AboutScreen';
//import HomeScreen from './practiceComponents/Navigation/StackNavigator/Screens/HomeScreen2';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen2';
import { View,Text, Pressable } from 'react-native';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Home' screenOptions={""}>
           <Stack.Screen name="Home" component={HomeScreen} 
              options={{
                title:"At Home",
                headerStyle:{
                  backgroundColor:"#6a51ae"
                },
                headerTintColor:"white",
                headerTitleStyle:{
                  fontWeight:"600"
                },
                headerRight:()=>(
                  <Pressable onPress={()=>alert("Menu button")}>
                    <Text style={{color:"#fff",fontSize:16}}>Menue</Text>
                  </Pressable>
                ),
                contentStyle:{
                  backgroundColor:"#e8e4"
                }
              }}/>
           <Stack.Screen name="About" component={AboutScreen} initialParams={{name:"guist"}}
              options={{title:"At About"}}
           />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
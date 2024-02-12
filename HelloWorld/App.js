import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import AboutScreen from './practiceComponents/Navigation/StackNavigator/Screens/AboutScreen';
// import HomeScreen from './practiceComponents/Navigation/StackNavigator/Screens/HomeScreen2';
import { View,Text, Pressable } from 'react-native';
import DashBordScreen from './practiceComponents/Navigation/DrawerNavigation/DashBordScreen';
import SettingScreen from './practiceComponents/Navigation/DrawerNavigation/SettingScreen';
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
         <Drawer.Navigator>
           <Drawer.Screen  name="Dashbord" component={DashBordScreen}
              options={{
                title:"My DashBord",
                drawContainStyle:{
                  backgroundColor:"red"
                }
              }}
           />
           <Drawer.Screen  name="Settin"  component={SettingScreen}/>
         </Drawer.Navigator>
    </NavigationContainer>
  );
}
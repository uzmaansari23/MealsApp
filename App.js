import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from './screens/FavoritesScreen';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Meal from './models/meal';
import MealsOverviewScreen from './screens/MealsOverwiewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
const Stack = createStackNavigator()

const Drawer = createDrawerNavigator()


function DrawerNavigator(){

   return <Drawer.Navigator
   screenOptions={{
    headerStyle:{
      backgroundColor:'#351401',
     
    },
    headerTintColor:'white',
    sceneContainerStyle:{backgroundColor:'#3f2f25'},
    drawerContentStyle:{backgroundColor:'#351401'},
    drawerActiveTintColor:'#351401',
    drawerInactiveTintColor:'#FFFFFF',
    drawerActiveBackgroundColor:'#e4baa1'
   }}
   >
    <Drawer.Screen
    name='Categories'
    component={CategoriesScreen}
    options={{title:'All Categories',
  drawerIcon:({color,size})=><Entypo name="list" size={size} color={color} />}}
    />

    <Drawer.Screen
    name='Favorites'
    component={FavoriteScreen}
    options={{
  drawerIcon:({color,size})=><AntDesign name="star" size={size} color={color}/>}}/>
   </Drawer.Navigator>
}






export default function App() {
  
  
  return (
    <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen 
    name='Drawer'
    component={DrawerNavigator}
    options={{
      headerShown:false
    }}/>
    <Stack.Screen name='MealsOverview'
    component={MealsOverviewScreen}
    options={{title:'Meals Overview'}}/>
    <Stack.Screen name='MealsDetail'
    component={MealDetailScreen}
    options={{title:'Meals Detail'}}/>
   </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

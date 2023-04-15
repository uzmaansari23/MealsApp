import { useEffect } from "react"
import { Text, View } from "react-native"
import IconButton from "../components/IconButton"
import { MEALS } from "../data/dummy_data"
import { ScrollView } from "react-native-gesture-handler"
import { Image } from "react-native"
import { StyleSheet } from "react-native"
import MealsDetails from "../components/MealsDetails"
import SubTitle from "../components/MealDetails/SubTitle"
import List from "../components/MealDetails/List"


function MealDetailScreen({navigation,route}){
     const mealId = route.params.mealId

     const selectedMeal = MEALS.find(meal => meal.id===mealId)
     
     useEffect(()=>{
         navigation.setOptions({
            headerRight:()=><View style={{marginRight:20}}><IconButton icon='star' color='black'  size={24} onPress={()=>{}} /></View>
         })
     },[navigation])

     return <ScrollView style={styles.rootContainer}>
        <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealsDetails 
             duration={selectedMeal.duration}
             affordablity={selectedMeal.affordability}
             complexity={selectedMeal.complexity}
             
        />
        <View style={styles.listOutContainer}>
            <View  style={styles.listContainer}>
        <SubTitle>Ingredients</SubTitle>
        <List>{selectedMeal.ingredients}</List>
        
        <SubTitle>Steps</SubTitle>
        <List>{selectedMeal.steps}</List>
        </View>
        </View>
          </ScrollView>
}

export default MealDetailScreen

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:350
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'#e2b497'

    },
    rootContainer:{
      
    },
    listOutContainer:{
        alignItems:'center'
    },
    listContainer:{
       width:'90%'
    }
  
})
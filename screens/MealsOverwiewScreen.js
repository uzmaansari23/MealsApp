import { Text } from "react-native"
import { View } from "react-native"
import { MEALS } from "../data/dummy_data"
import MealsList from "../components/MealsList/MealsList"

function MealsOverviewScreen({route}){
    const mealId = route.params.categoryId
    const selectedMeal = MEALS.filter(meal =>meal.categoryIds.indexOf(mealId)>=0)
    
    return <MealsList items={selectedMeal}/>

}


export default MealsOverviewScreen 
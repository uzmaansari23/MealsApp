import { Text } from "react-native"
import { View } from "react-native"
import MealItem from "./MealItem"
import { FlatList } from "react-native"

function MealsList({items}){
    
    function renderMealItem(itemData){
        const item = itemData.item
       
        
        const mealItemProps ={
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            affordablity:item.affordability,
            complexity:item.complexity,
            duration:item.duration
        }
      return <MealItem {...mealItemProps}/>
    }

    return <FlatList
    data={items}
    renderItem={renderMealItem}/>

}

export default MealsList
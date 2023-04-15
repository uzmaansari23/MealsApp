import { View ,FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy_data"
import { Text } from "react-native"
import CategoryGridTitle from "../components/CategoryGridTitle"


function CategoriesScreen({navigation}){

    
    function renderCategoryItem(itemData){
        function pressHandler(){
            
            navigation.navigate('MealsOverview',{categoryId:itemData.id})
        }

        return <CategoryGridTitle item={itemData} onPress={pressHandler}/>
    }

    return <FlatList
    data={CATEGORIES}
    renderItem={({item})=>renderCategoryItem(item)}
    numColumns={2}
    />
    

}

export default CategoriesScreen
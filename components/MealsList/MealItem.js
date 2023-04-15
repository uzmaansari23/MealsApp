import { Pressable } from "react-native"
import { Text } from "react-native"
import { Image } from "react-native"
import { StyleSheet } from "react-native"
import { View } from "react-native"
import MealsDetails from "../MealsDetails"
import { useNavigation } from "@react-navigation/native"

function MealItem({id,title,affordablity,complexity,duration,imageUrl}){
    
    const navigation = useNavigation()

    return <View style={styles.mealItem}>
        <Pressable
        android_ripple={{color:"#ccc"}} style={({pressed})=>[styles.button,pressed?styles.buttonPressed:null]}
        onPress={()=>navigation.navigate('MealsDetail',{mealId:id})}
        >
            <View style={styles.innerContainer}>
              <View>
                    <Image source={{uri:imageUrl}} style={styles.image}/>
                    
                    <Text style={styles.title}>{title}</Text>
                    </View> 
                <MealsDetails
                duration={duration}
                complexity={complexity}
                affordablity={affordablity}/>
            </View>
        </Pressable>

    </View>



}

export default MealItem

const styles = StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        backgroundColor:"#FFF",
        elevation:4,
        shadowColor:"black",
        shadowOffset:{width:0,height:50},
        shadowOpacity:0.25,
        shadowRadius:8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    image:{
        width:"100%",
        height:200
    },
    buttonPressed:{
        opacity:0.5
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        color:"black",
        textAlign:'center'
        
    },
    innerContainer:{
        borderRadius:8,
        
    }
})
import { StyleSheet } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"

function MealsDetails({duration,complexity,affordablity}){
    
    return <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordablity.toUpperCase()}</Text>
    </View>

}

export default MealsDetails


const styles = StyleSheet.create({
    details:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center",
        
    },
    detailItem:{
        fontSize:15,
        marginHorizontal:10

    }
})
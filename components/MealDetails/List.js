import { StyleSheet } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"

function List({children}){
    
    return children.map((datapoint,idx)=><View key={idx} style={styles.listItem}>
        <Text style={styles.itemText}>{datapoint}</Text>
    </View>)
}

export default List


const styles = StyleSheet.create({
    listItem:{
        borderRadius:6,
        backgroundColor:"#e2b497",
        marginHorizontal:12,
        paddingVertical:4,
        marginVertical:4,
        paddingHorizontal:10
    },
    itemText:{
        color:'#FFFFFF',
        fontSize:15
    }
})
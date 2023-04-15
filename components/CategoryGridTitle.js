import { StyleSheet } from "react-native"
import { Pressable } from "react-native"
import { Platform } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"

function CategoryGridTitle({item,onPress}){
  

    return <View style={styles.gridItem}>
        <Pressable
        android_ripple={{color:"#ccc"}} style={({pressed})=>[styles.button,pressed?styles.buttonPressed:null]}
        onPress={onPress}
        >
        <View style={[styles.innerContainer,{backgroundColor:item.color}]}>
        <Text style={styles.title}>{item.title}</Text>
        </View></Pressable>
    </View>
}

export default CategoryGridTitle


const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        borderWidth:2,
        margin:16,
        height:150,
        elevation:4,
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:12},
        shadowRadius:8,
        overflow:Platform.OS === 'android'?'hidden':'visible'    
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    },
    innerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity:0.5
    }
    
})
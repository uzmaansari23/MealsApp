import { Ionicons } from "@expo/vector-icons"
import { Pressable } from "react-native"

function IconButton({icon,color,onPress,size}){
 
    return <Pressable>
        <Ionicons name={icon} color={color} size={size}/>
    </Pressable>

}

export default IconButton
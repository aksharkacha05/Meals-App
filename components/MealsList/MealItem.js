import { View, Text, Pressable,Image,StyleSheet,Platform } from "react-native";
import { useNavigation} from '@react-navigation/native'
import MealDetail from "../MealDetail";

function MealItem({ id,title,imageUrl,duration,complexity,affordability }) {
    const navigation = useNavigation();

    function selectMealItemHandler(){
        navigation.navigate('MealDetail',{
            mealId:id})
    }

    
    
    return (
        <View style={styles.mealsItem}>
            <Pressable android_ripple={{color:'#ccc'}}
            style={({pressed})=>(pressed ? styles.buttonPressed : null)} onPress={selectMealItemHandler}>
                <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri:imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetail duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealsItem:{
        margin:16,
        overflow:Platform.OS === 'android' ? 'hidden': 'visible',
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.35,
        shadowOffset:{width:0, height:2},
        shadowRadius:16,
    },
    buttonPressed:{
        opacity:0.5,
    },
    innerContainer:{
        // borderRadius:20, 
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:200
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8,
    },
    
})
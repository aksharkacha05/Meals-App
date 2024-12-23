import { View,FlatList,StyleSheet } from "react-native";
import MealItem from "./MealItem";


function MealsList({items}){ 
   function renderMealsItem(itemData){
    const item = itemData.item;
    const mealItemsProps = {
        id:item.id,
        title:item.title, 
        imageUrl:item.imageUrl,
        affordability:item.affordability,
        complexity:item.complexity,
        duration:item.duration
    }
    return  <MealItem {...mealItemsProps} />
   }
    return (<View style={styles.container}>
        <FlatList data={items} keyExtractor={(item)=>item.id} renderItem={renderMealsItem}/>
    </View>
)
}

export default MealsList;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})
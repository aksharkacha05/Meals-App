// import { useContext } from "react";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealList";
// import { FavoritesContext } from "../store/context/favorites-contex";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View,Text } from "react-native";

function FavoritesScreen(){
    // const favoriteMealctx= useContext(FavoritesContext);
    const favoriteMealIds = useSelector(state => state.favoritesMelas.ids);
    const favoriteMeal = MEALS.filter(meal => favoriteMealIds.includes(meal.id)) 
    if(favoriteMeal.length === 0){
        return<View style={styles.rootContenair}>
            <Text style={styles.text}>You have no favorite Meals yet.</Text>
        </View>
    }
    return <MealsList items={favoriteMeal} />
}

export default  FavoritesScreen;

const styles = StyleSheet.create({
    rootContenair:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})
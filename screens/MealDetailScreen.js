import { useContext, useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet,ScrollView, Button} from "react-native"

import { MEALS } from "../data/dummy-data"
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/mealDetail/Subtitle"
import List from "../components/mealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorite";
// import {FavoritesContext} from "../store/context/favorites-contex"

function MealDatailScreen({ route,navigation  }) {
//    const favoriteMealctx =  useContext(FavoritesContext)
       const favoriteMealIds=  useSelector((state)=>state.favoritesMelas.ids);
       const dispatch =  useDispatch();
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealsIsFavourite = favoriteMealIds.includes(mealId);

    function changeFavoritesStatusHandler(){
        if(mealsIsFavourite){
            // favoriteMealctx.removeFavorite(mealId);
            dispatch(removeFavorite({id:mealId}));
        }else{
            // favoriteMealctx.addFavorite(mealId);
            dispatch(addFavorite({id:mealId}));

        }
        
        
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton onPress={changeFavoritesStatusHandler} icon={mealsIsFavourite ? 'star': 'star-outline'} color="white"/>
            }
        });
    },[navigation,changeFavoritesStatusHandler]);
    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetail duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.detailText} />

            <View style={styles.listOuterContaneir}>
                <View style={styles.listContaneir}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDatailScreen


const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContaneir:{
        alignItems:'center'
    },
    listContaneir: {
        maxWidth: '80%'
    }

})
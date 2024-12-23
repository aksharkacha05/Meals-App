import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDatailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favorites-contex';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const drawer = createDrawerNavigator();

function  DrawerNavigator(){
  return<drawer.Navigator
  screenOptions={{
    headerStyle:{backgroundColor:'#351401'},
      headerTintColor:'white',
      sceneContainerStyle:{"backgroundColor":"#3f2f25",},
      drawerContentStyle:{backgroundColor:'#351401'},
      drawerInactiveTintColor:'white',
      drawerActiveTintColor:'#351401',
      drawerActiveBackgroundColor:'#e4baa1'
  }}>
    <drawer.Screen name='Categories' component={CategoriesScreen} options={{
      title:'All Catogries',
      drawerIcon:({color,size})=><Ionicons name='list' color={color} size={size}/>
    }}/>
    <drawer.Screen name='Favourites' component={FavoritesScreen} options={{
       drawerIcon:({color,size})=><Ionicons name='star' color={color} size={size}/>
    }}/>
  </drawer.Navigator> 
}

export default function App() {
  return (
  <><StatusBar style='light'/>
  {/* <FavoritesContextProvider> */}
  <Provider store={store}>
  <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      
      headerStyle:{backgroundColor:'#351401'},
      headerTintColor:'white',
      contentStyle:{"backgroundColor":"#3f2f25",}
    }}>
      <Stack.Screen name='drawer' component={DrawerNavigator} options={{
        headerShown:false    
      }}/>
      <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}
      // // options={({route,navigation})=>{
      // //   const catId = route.params.categoryIds;
      // //   return {
      // //     title:catId,
      // //   };
      // }}
      />

      <Stack.Screen name='MealDetail'
      options={{title:'About the Meal',
      }} component={MealDatailScreen}
      />
    </Stack.Navigator>
      
    </NavigationContainer>
    {/* </FavoritesContextProvider> */}
    </Provider>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./BottomNavigation";
import DrawerNavigator from "./DrawerNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardingScreen } from "./constant";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (

  
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="TabNavigator">
    <Stack.Screen
        name="TabNavigator"
        component={BottomNavigation}
        options={{ headerShown: false }}
      />

     
    </Stack.Navigator>
  </NavigationContainer>
  )
}

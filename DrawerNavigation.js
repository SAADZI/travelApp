import React,{useState} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import SingleProductPage from "./screens/SingleProductPage";
import Search from "./screens/Notification";
import BookMark from "./screens/BookMark";



const DrawerNavigator = ()=>{
  const Drawer = createDrawerNavigator();
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const handleDrawerStateChange = (newState) => {
    setDrawerOpen(newState === 'opened');
  };
  return (
 
      <Drawer.Navigator screenOptions={{headerShown:false}} initialRouteName="Home" drawerType={drawerOpen ? 'slide' : 'front'} drawerStyle={{ width: 200 }} onStateChange={handleDrawerStateChange}>
      <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen
          name="Search"
          component={Search}
        
        />
        <Drawer.Screen
          name="SingleProduct"
          component={SingleProductPage}
        
        />
        <Drawer.Screen
          name="BookMark"
          component={BookMark}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
        />
      </Drawer.Navigator>

  );
  }

export default DrawerNavigator;



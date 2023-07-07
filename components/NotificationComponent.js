import { View, Text, Image, ScrollView, TouchableHighlight } from "react-native";
import React from "react";
import { Ionicons } from "../Icon";

const NotificationComponent = () => {
  return (
    <TouchableHighlight>
    <View className=" m-2 shadow-lg bg-primary rounded-3xl  p-2 flex-row">
   

     <Image
       className="w-10 h-10 rounded-full"
       source={require("../assets/profile1.png")}
     />
      <View className="bg-white  rounded-full absolute mt-3 ml-2" >
     
            
            <Ionicons
                 size={12}
                 name="notifications-outline"
               
                
                 
               />
           
      </View>
     <View>
       <Text className="font-semibold">
         <Ionicons name="location" size={15} /> 123 Main Street
       </Text>
       <Text>Lorem Ipsum is simply dummy text of the printing</Text>

     </View>
   </View>
  </TouchableHighlight>
  )
}

export default NotificationComponent
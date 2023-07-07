import { View, Text,Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from "@react-navigation/native";
const OnBoardingScreen = () => {

  const navigation= useNavigation()
  return (
   <Onboarding 
onSkip={() => navigation.replace('Home')}
onDone={() => navigation.replace('Home')}

   pages={[
    {
      backgroundColor: '#fff',
      image: <View className="w-10 h-10"><Image  source={require('./assets/image1.jpg')} /></View>,
title:<Text className="">OnBoarding</Text>,
subtitle:<Text className="">  Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy
text ever since the 1500s, when an unknown printer took a galley
of type and scrambled it to make a type specimen book.</Text>,

    },
  
   ]}
   
   />
  )
}

export default OnBoardingScreen
import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import BookMarkCompnent from "../components/BookMarkCompnent";
import NotificationComponent from "../components/NotificationComponent";

const Notification = () => {
  return (
    <SafeAreaView>
      <View className="items-center justify-center">
        <Text className="text-3xl font-light  my-5   ">Notifications</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <NotificationComponent />
          <NotificationComponent />
          <NotificationComponent />
          <NotificationComponent />
          <NotificationComponent />
          <NotificationComponent />
          <NotificationComponent />
          <NotificationComponent />
          <NotificationComponent />
          <NotificationComponent />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import BookMarkCompnent from "../components/BookMarkCompnent";

const BookMark = () => {
  return (
    <SafeAreaView>
      <View className="items-center justify-center">
        <Text className="text-3xl font-light  my-5   ">BookMarks</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
      <BookMarkCompnent/>
      <BookMarkCompnent/>
      <BookMarkCompnent/>
      <BookMarkCompnent/>
      <BookMarkCompnent/>
      <BookMarkCompnent/>
      <BookMarkCompnent/>
      <BookMarkCompnent/>
      <BookMarkCompnent/>
      <BookMarkCompnent/>
      <BookMarkCompnent/>
      <BookMarkCompnent/>
</ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BookMark;

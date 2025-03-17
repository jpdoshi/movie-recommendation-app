import { Image, ScrollView, View } from "react-native";

import images from "@/constants/images";
import SearchBar from "@/components/SearchBar";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bgImage} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        {/* icon */}
        <Image source={images.logo} className="w-12 h-12 mt-16 mb-4 mx-auto" />

        {/* searchbar */}
        <View className="flex-1">
          <SearchBar />
        </View>
      </ScrollView>
    </View>
  );
}

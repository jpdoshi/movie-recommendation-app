import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const PopularCard = ({ id, title, posterPath, index }: any) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-32 relative">
        <Image
          source={{
            uri: posterPath
              ? `https://image.tmdb.org/t/p/w500${posterPath}`
              : "https://placehold.co/400x600/121212/424242.png?text=N/A",
          }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />
        <Text
          numberOfLines={1}
          className="text-white absolute bottom-0 pl-2 pb-0.5 text-sm font-bold z-10"
        >
          {title}
        </Text>
        <View className="absolute z-10 top-0 right-0 px-2 bg-[#d32f2f] rounded-bl-lg rounded-tr-lg items-center">
          <Text className="text-[#ffebee] text-base font-medium">
            #{index + 1}
          </Text>
        </View>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.75)"]}
          className="absolute w-full h-16 bottom-0 left-0"
        />
      </TouchableOpacity>
    </Link>
  );
};

export default PopularCard;

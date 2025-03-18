import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import StarIcon from "./StarIcon";

const MovieCard = ({ id, poster, title, votes, releaseDate }: any) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[50%] gap-1">
        <Image
          source={{
            uri: poster
              ? `https://image.tmdb.org/t/p/w500${poster}`
              : "https://placehold.co/400x600/121212/424242.png?text=no+poster",
          }}
          className="w-full aspect-[9/12] rounded-lg"
          resizeMode="cover"
        />
        <View className="mb-2 mt-1 px-1 gap-1">
          <Text
            className="text-white font-bold text-sm leading-tight"
            numberOfLines={1}
          >
            {title}
          </Text>
          <View className="w-full flex-row justify-between items-center">
            <View className="flex-row gap-1 items-center">
              <StarIcon />
              <Text className="text-white text-xs font-semibold tracking-wider">
                {votes.toFixed(1)}
              </Text>
            </View>
            <Text className="text-xs font-medium text-secondary">
              {releaseDate.split("-")[0]}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;

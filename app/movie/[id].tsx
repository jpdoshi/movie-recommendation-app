import React from "react";

import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import useFetch from "@/services/useFetch";
import { fetchMovieDetails } from "@/services/api";
import { LinearGradient } from "expo-linear-gradient";
import StarIcon from "@/components/StarIcon";
import Svg, { G, Path } from "react-native-svg";

const InfoBlock = ({ label, value }: any) => (
  <View className="px-5 flex-col items-start justify-center mt-4 mb-2">
    <Text className="text-accent font-semibold text-lg tracking-normal">
      {label}
    </Text>
    <Text className="text-white mt-1 tracking-normal leading-normal">
      {value || "N/A"}
    </Text>
  </View>
);

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const {
    data: movie,
    loading,
    error,
  } = useFetch(() => fetchMovieDetails(id as string));

  const router = useRouter();

  return (
    <View className="bg-primary flex-1">
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#e53935"
          className="mt-48 self-center"
        />
      ) : error ? (
        <Text className="mt-20 text-center text-secondary">
          Failed to load movie
        </Text>
      ) : (
        <>
          <SafeAreaView className="flex-1 z-50">
            <TouchableOpacity
              onPress={() => router.back()}
              className="absolute left-4 top-14"
            >
              <Svg
                height={36}
                width={36}
                viewBox="0 0 32 32"
                className="bg-[rgba(0,0,0,0.5)] rounded-full p-1"
              >
                <G id="SVGRepo_iconCarrier">
                  <Path
                    d="M5 12H19M5 12L11 6M5 12L11 18"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </G>
              </Svg>
            </TouchableOpacity>
          </SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="w-full aspect-[9/13] relative">
              <Image
                source={{
                  uri: movie?.poster_path
                    ? `https://tmdb.org/t/p/w500${movie?.poster_path}`
                    : "https://placehold.co/400x600/121212/424242.png?text=N/A",
                }}
                className="w-full h-full"
                resizeMode="stretch"
              />

              {/* top gradient */}
              <LinearGradient
                colors={["rgba(0,0,0,0.5)", "transparent"]}
                className="absolute left-0 w-full top-0 h-64"
              />

              {/* bottom gradient */}
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                className="absolute left-0 w-full bottom-0 h-64 border-1"
              />

              <View className="absolute w-full left-0 bottom-0 p-5 pb-2 gap-1">
                <Text
                  className="text-white text-3xl tracking-normal font-bold"
                  numberOfLines={1}
                >
                  {movie?.title}
                </Text>
                <View className="flex-row gap-4">
                  <Text className="text-white">
                    {movie?.release_date && movie?.release_date.split("-")[0]}
                  </Text>
                  <Text className="text-white">
                    {movie?.runtime && movie?.runtime}m
                  </Text>
                  <View className="flex-row gap-1 items-center">
                    <StarIcon />
                    <Text className="text-white tracking-wide">
                      {movie?.vote_average > 0
                        ? movie?.vote_average.toFixed(1) + "/10"
                        : "N/A"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <InfoBlock label="Overview" value={movie?.overview} />
            <InfoBlock
              label="Genres"
              value={
                movie?.genres?.map((g: any) => g.name).join(" - ") || "N/A"
              }
            />
            <View className="flex-row gap-4">
              <InfoBlock
                label="Budget"
                value={
                  `${
                    movie?.budget > 0
                      ? "$" + movie?.budget / 1000000 + "m"
                      : "N/A"
                  }` || "N/A"
                }
              />
              <InfoBlock
                label="Revenue"
                value={
                  `${
                    movie?.revenue > 0
                      ? "$" + (movie?.revenue / 1000000).toFixed(0) + "m"
                      : "N/A"
                  }` || "N/A"
                }
              />
            </View>
            <InfoBlock
              label="Production Companies"
              value={
                movie?.production_companies
                  .map((c: any) => c.name)
                  .join(" - ") || "N/A"
              }
            />
            <View className="h-8" />
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default MovieDetails;

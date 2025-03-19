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

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  const router = useRouter();

  return (
    <View className="bg-primary flex-1">
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#e53935"
          className="mt-48 self-center"
        />
      ) : (
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 80,
          }}
        >
          <View className="w-full aspect-[9/12] relative">
            <Image
              source={{
                uri: `https://tmdb.org/t/p/w500${movie?.poster_path}`,
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
              colors={["transparent", "#000"]}
              className="absolute left-0 w-full bottom-0 h-48"
            />

            <SafeAreaView className="absolute">
              <TouchableOpacity onPress={() => router.back()}>
                <Text className="text-white">Go back icon</Text>
              </TouchableOpacity>
            </SafeAreaView>

            <Text
              className="text-white text-2xl font-bold absolute left-0 bottom-0 p-5"
              numberOfLines={1}
            >
              {movie?.title}
            </Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default MovieDetails;

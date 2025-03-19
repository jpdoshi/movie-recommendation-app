import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

import images from "@/constants/images";
import SearchBar from "@/components/SearchBar";

import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";

import MovieCard from "@/components/MovieCard";
import PopularCard from "@/components/PopularCard";

export default function Index() {
  const router = useRouter();

  const {
    data: latestMovies,
    loading: latestMoviesLoading,
    error: latestMoviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  const {
    data: trendingMovies,
    loading: trendingMoviesLoading,
    error: trendingMoviesError,
  } = useFetch(() => fetchMovies({ query: "", popular: true }));

  return (
    <View className="flex-1 bg-primary">
      {/* top gradient */}
      <LinearGradient
        colors={["rgba(183,28,28,0.5)", "transparent"]}
        style={{
          position: "absolute",
          top: 0,
          height: 180,
          width: "100%",
          zIndex: 0,
        }}
      />

      {/* bottom gradient */}
      <LinearGradient
        colors={["transparent", "#000"]}
        style={{
          position: "absolute",
          bottom: 0,
          height: 200,
          width: "100%",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        {/* icon */}
        <Image source={images.logo} className="w-12 h-12 mt-16 mb-4 mx-auto" />

        {latestMoviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#e53935"
            className="mt-10 self-center"
          />
        ) : latestMoviesError ? (
          <Text>Error: {latestMoviesError?.message}</Text>
        ) : (
          <View className="flex-1">
            <View className="px-5">
              <SearchBar
                placeholder="Search for movie"
                onPress={() => router.push("/search")}
              />
              <Text className="text-lg text-white font-bold mt-4 mb-2 ml-2">
                Popular Movies
              </Text>
            </View>

            <FlatList
              data={trendingMovies && trendingMovies.slice(0, 10)}
              horizontal={true}
              ItemSeparatorComponent={() => <View className="w-2.5" />}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <PopularCard
                  id={item.id}
                  title={item.title}
                  index={index}
                  posterPath={item.poster_path}
                />
              )}
              ListHeaderComponent={() => <View className="w-5" />}
              ListFooterComponent={() => <View className="w-5" />}
              keyExtractor={(item) => item.id.toString()}
              className="px-1.5 pb-4"
            />

            <View className="px-5">
              <Text className="text-lg text-white font-bold mt-4 mb-2 ml-2">
                Latest Movies
              </Text>

              <FlatList
                data={latestMovies}
                renderItem={({ item }) => (
                  <MovieCard
                    id={item.id}
                    title={item.title}
                    poster={item.poster_path}
                    votes={item.vote_average}
                    releaseDate={item.release_date}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{
                  justifyContent: "center",
                  gap: 12,
                  paddingInline: 12,
                  marginBottom: 8,
                }}
                className="mt-1 pb-32"
                scrollEnabled={false}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

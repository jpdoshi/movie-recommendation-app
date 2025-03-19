import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import React, { useEffect, useState } from "react";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";
import images from "@/constants/images";

const search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      {/* top gradient */}
      <LinearGradient
        colors={["#320606", "transparent"]}
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
          height: 220,
          width: "100%",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      {/* icon */}
      <Image source={images.logo} className="w-12 h-12 mt-16 mb-4 mx-auto" />

      <View className="flex-1 px-5">
        <SearchBar
          placeholder="Search for movie"
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
          }}
        />

        {searchQuery.trim() && (
          <Text className="text-lg text-white font-bold my-2 ml-2">
            Search Resuts for:{" "}
            <Text className="text-[#ef9a9a]">{searchQuery.trim()}</Text>
          </Text>
        )}

        <FlatList
          data={movies}
          renderItem={({ item }) =>
            !moviesLoading && !moviesError ? (
              <MovieCard
                id={item.id}
                title={item.title}
                poster={item.poster_path}
                votes={item.vote_average}
                releaseDate={item.release_date}
                isSearch
              />
            ) : null
          }
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "center",
            gap: 8,
            paddingInline: 12,
            marginBottom: 16,
          }}
          ListEmptyComponent={
            !moviesLoading && !moviesError ? (
              <View className="mt-8">
                <Text className="text-secondary text-center">
                  {searchQuery.trim()
                    ? `No Movie found for: ${searchQuery}`
                    : "Search for a movie"}
                </Text>
              </View>
            ) : null
          }
          className="mt-1 pb-32"
        />
      </View>
    </View>
  );
};

export default search;

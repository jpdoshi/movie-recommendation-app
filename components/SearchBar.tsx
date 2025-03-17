import { TextInput, View } from "react-native";
import React from "react";
import SearchIcon from "./toolbar/SearchIcon";

const SearchBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "rgba(24,24,24,0.5)",
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 8,
        borderRadius: 32,
      }}
    >
      <SearchIcon focused={true} size={18} />
      <TextInput
        onPress={() => {}}
        placeholder="Search"
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#666"
        className="flex-1 text-white"
      />
    </View>
  );
};

export default SearchBar;

import { Pressable, TextInput, View } from "react-native";
import SearchIcon from "./toolbar/SearchIcon";

interface Props {
  onPress?: () => void;
  placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "rgba(140,140,140,0.15)",
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 8,
        borderRadius: 32,
      }}
    >
      <SearchIcon focused={true} size={18} />
      <Pressable onPress={onPress}>
        <TextInput
          placeholder={placeholder}
          value=""
          onChangeText={() => {}}
          placeholderTextColor="#ddd"
          className="flex-1 text-white"
        />
      </Pressable>
    </View>
  );
};

export default SearchBar;

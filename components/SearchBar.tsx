import { TextInput, View } from "react-native";
import SearchIcon from "./toolbar/SearchIcon";

interface Props {
  onPress?: () => void;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
}

const SearchBar = ({ onPress, placeholder, onChangeText, value }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "rgba(140,140,140,0.15)",
        paddingHorizontal: 16,
        paddingVertical: 4,
        gap: 8,
        borderRadius: 32,
        alignItems: "center",
      }}
    >
      <SearchIcon focused={true} size={18} />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#ddd"
        className="flex-1 text-white"
      />
    </View>
  );
};

export default SearchBar;

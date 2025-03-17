import Svg, { G, Path } from "react-native-svg";
import React from "react";

const SearchIcon = ({ focused, size }: any) => {
  return (
    <Svg
      width={size ? `${size}px` : "24px"}
      height={size ? `${size}px` : "24px"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke={focused === true ? "#fafafa" : "#666"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

export default SearchIcon;

import Svg, { Circle, G, Path } from "react-native-svg";
import React from "react";

const ProfileIcon = ({ focused }: any) => {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 32 32">
      <G id="SVGRepo_iconCarrier">
        <Circle
          cx="16"
          cy="16"
          fill="none"
          r="15"
          stroke={focused === true ? "#fafafa" : "#666"}
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2.4"
        />
        <Path
          d="M26,27L26,27 c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0"
          fill="none"
          stroke={focused === true ? "#fafafa" : "#666"}
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2.4"
        />
        <Circle
          cx="16"
          cy="11"
          fill="none"
          r="6"
          stroke={focused === true ? "#fafafa" : "#666"}
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2.4"
        />
      </G>
    </Svg>
  );
};

export default ProfileIcon;

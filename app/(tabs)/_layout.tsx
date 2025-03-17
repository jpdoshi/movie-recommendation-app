import React from "react";
import { Tabs } from "expo-router";

import HomeIcon from "@/components/toolbar/HomeIcon";
import ProfileIcon from "@/components/toolbar/ProfileIcon";
import BookmarkIcon from "@/components/toolbar/BookmarkIcon";
import SearchIcon from "@/components/toolbar/SearchIcon";

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          alignItems: "center",
          flexDirection: "row",
        },
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#121212",
          borderColor: "#121212",
          borderWidth: 1,
          boxShadow: "0px 2px 4px rgba(0,0,0,0.15)",
          marginHorizontal: 20,
          marginBottom: 36,
          height: 60,
          borderRadius: 48,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => <SearchIcon focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => <BookmarkIcon focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
        }}
      />
    </Tabs>
  );
};

export default _Layout;

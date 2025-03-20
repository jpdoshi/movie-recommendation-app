import React from "react";
import { Stack } from "expo-router";

import "./globals.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        navigationBarColor: "transparent",
        statusBarBackgroundColor: "rgba(0,0,0,0.5)",
        navigationBarTranslucent: true,
        statusBarTranslucent: true,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}

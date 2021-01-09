import React, { useState, useEffect } from "react";
import { Appearance } from "react-native";
import { dark, light } from "./colorThemes";

function useTheme(props) {
  const [isDark, setIsDark] = useState(false);
  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === "dark") {
    setIsDark(true);
  }

  //   useEffect(() => {
  //     function handleColorChange() {
  //       setIsDark(!isDark);
  //     }
  //   });

  return isDark ? "dark" : "light";
}

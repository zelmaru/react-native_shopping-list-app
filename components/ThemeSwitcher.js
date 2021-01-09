import React, { useState } from "react";
import { Switch, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { dark, light } from "./colorThemes";

const ThemeSwitcher = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.switcherContainer}>
      {isEnabled && (
        <Icon
          style={styles.switcherIcon}
          name="sun-o"
          color={dark.bg}
          size={20}
        />
      )}
      <Switch
        style={styles.switcher}
        trackColor={{ false: "#121417", true: "#f7f7f7" }}
        thumbColor={isEnabled ? "#121417" : "#f7f7f7"}
        ios_backgroundColor="#f7f7f7"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {!isEnabled && (
        <Icon
          style={styles.switcherIcon}
          name="moon-o"
          color={light.bg}
          size={20}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  switcherContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 40,
  },
  switcherIcon: {},
  switcher: {},
});

export default ThemeSwitcher;

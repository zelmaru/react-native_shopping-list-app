import React from "react";
import { View, StyleSheet } from "react-native";
import IconBtn from "./IconBtn";

function SideDrawer(props) {
  return (
    <View style={styles.sideDrawer} onPress={() => props.onMenuClose()}>
      <IconBtn
        greyBtn
        incoName="closesquareo"
        onPress={() => props.onMenuClose()}
      />
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  sideDrawer: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default SideDrawer;

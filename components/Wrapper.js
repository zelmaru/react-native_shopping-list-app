import React from "react";
import { StyleSheet, View } from "react-native";

function Wrapper(props) {
  return <View style={styles.wrapper}>{props.children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 100,
  },
});

export default Wrapper;

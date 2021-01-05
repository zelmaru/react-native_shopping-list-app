import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Wrapper(props) {
  return <View style={styles.wrapper}>{props.children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 100,
  },
});

export default Wrapper;

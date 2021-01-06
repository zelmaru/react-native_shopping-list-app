import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function IconBtn(props) {
  return (
    <TouchableOpacity
      // default button is square (border-radius: 4)
      style={[
        styles.btn,
        { borderRadius: props.round ? 50 : 4 },
        props.header && styles.btnHeader,
        props.shareBtn && styles.btnShare,
      ]}
      onPress={() => props.btnAction()}
    >
      <Icon name={props.iconName} size={24} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#ff577f",
    padding: 9,
    width: 46,
    height: 46,
    margin: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  btnHeader: {
    position: "absolute",
    top: 1.5,
    right: 1,
  },
  btnShare: {
    marginLeft: "auto",
  },
});

export default IconBtn;

import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function IconBtn(props) {
  return (
    <TouchableOpacity
      // default button is square (border-radius: 4)
      style={[
        props.greyBtn ? styles.greyBtn : styles.btn,
        { borderRadius: props.round ? 50 : 4 },
        props.header && styles.btnHeader,
        props.shareBtn && styles.btnShare,
      ]}
      onPress={() => props.btnAction()}
    >
      <Icon
        name={props.iconName}
        size={props.greyBtn ? 20 : 24}
        color={props.greyBtn ? "grey" : "#fff"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  greyBtn: {
    // padding: 12,
    // paddingLeft: 0,
    // paddingRight: 0,
  },
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
    // position: "absolute",
    // bottom: 1.5,
    // right: 1,
  },
});

export default IconBtn;

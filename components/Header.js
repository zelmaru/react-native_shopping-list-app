import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.content}>
        <Icon
          name="shopping-basket"
          size={24}
          color="#ff884b"
          style={styles.icon}
        />
        {props.title}
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>
          Clear
          <Icon name="remove" size={30} color="#fff" style={styles.btnIcon} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 36,
    backgroundColor: "#ff577f",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 5,
  },
  content: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Raleway_500Medium",
  },
  icon: {
    marginRight: 12,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 50,
  },
  btn: {
    backgroundColor: "#ff884b",
    padding: 8,
    borderRadius: 4,
    margin: 12,
    position: "absolute",
    top: 1,
    right: 1,
    display: "flex",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Raleway_700Bold",
  },
  btnIcon: {
    marginLeft: 12,
  },
});

export default Header;

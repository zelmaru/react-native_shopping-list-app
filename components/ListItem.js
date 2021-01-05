import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function ListItem({ item, deleteItem }) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon
          name="trash-o"
          size={20}
          color="#343A40"
          style={styles.icon}
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#ffc764",
    marginBottom: 4,
    borderRadius: 4,
  },
  listItemView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 30,
  },
  listItemText: {
    fontSize: 18,
    color: "#343A40",
    fontFamily: "Raleway_500Medium",
  },
  icon: {
    // backgroundColor: "#fff",
    // padding: 6,
    // borderRadius: 50,
  },
});

export default ListItem;

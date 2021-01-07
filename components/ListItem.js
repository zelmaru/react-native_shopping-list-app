import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import ConfirmModal from "./ConfirmModal";

function ListItem({ item, deleteItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      {modalVisible && (
        <ConfirmModal
          visible={modalVisible}
          modalText={`Are you sure you want to delete "${item.text}"?`}
          onCancel={() => {
            setModalVisible(false);
          }}
          onConfirm={() => deleteItem(item.id)}
        />
      )}
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
          <Text style={styles.listItemText}>{item.text}</Text>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setModalVisible(true)}
          >
            <Icon name="delete" size={20} color="grey" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingLeft: 7,
    backgroundColor: "#f7f7f7",
    marginBottom: 7,
    borderRadius: 4,
    elevation: 2,
  },
  listItemView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    marginLeft: 10,
    fontSize: 16,
    color: "grey",
    width: "80%",
  },
  icon: {
    padding: 12,
  },
});

export default ListItem;

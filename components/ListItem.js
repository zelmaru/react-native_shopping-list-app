import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import ConfirmModal from "./ConfirmModal";
import IconBtn from "./IconBtn";

function ListItem({ item, deleteItem, editItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [itemText, setItemText] = useState(item.text);

  const handleInputChange = (textValue) => {
    setItemText(textValue);
  };

  const saveText = () => {
    setIsEditable(false);
    editItem(item.id, itemText);
  };

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
      <TouchableOpacity
        style={[styles.listItem, isEditable && styles.listItemEditable]}
      >
        <View style={styles.listItemView}>
          {isEditable ? (
            <TextInput
              style={styles.listItemText}
              onChangeText={handleInputChange}
              value={itemText}
            />
          ) : (
            <Text style={styles.listItemText}>{itemText}</Text>
          )}
          {!isEditable && (
            <IconBtn
              greyBtn
              iconName="edit"
              btnAction={() => setIsEditable(true)}
            />
          )}
          {!isEditable && (
            <IconBtn
              greyBtn
              iconName="delete"
              btnAction={() => setModalVisible(true)}
            />
          )}
          {isEditable && (
            <IconBtn greyBtn iconName="save" btnAction={saveText} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    paddingLeft: 12,
    backgroundColor: "#f7f7f7",
    marginBottom: 7,
    borderRadius: 4,
    elevation: 2,
  },
  listItemEditable: {
    borderWidth: 2,
    borderColor: "grey",
    padding: 8,
    paddingLeft: 10,
  },
  listItemView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    marginLeft: 5,
    fontSize: 16,
    color: "grey",
    width: "70%",
  },
});

export default ListItem;

import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import ConfirmModal from "./ConfirmModal";
import Icon from "react-native-vector-icons/FontAwesome";

function Header(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const onModalConfirm = () => {
    setModalVisible(false);
    props.clearAll();
  };
  return (
    <View>
      {modalVisible && (
        <ConfirmModal
          visible={modalVisible}
          modalText="Are you sure you want to delete all items?"
          onCancel={() => {
            setModalVisible(false);
          }}
          onConfirm={onModalConfirm}
        />
      )}
      <View style={styles.header}>
        <Text style={styles.content}>
          <Icon name="shopping-basket" size={24} color="#fff" /> Shopping List
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="trash-o" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
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
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 5,
    elevation: 2,
  },
  content: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginRight: "auto",
  },
  btn: {
    backgroundColor: "#ff577f",
    padding: 9,
    borderRadius: 4,
    width: 46,
    height: 46,
    margin: 12,
    position: "absolute",
    top: 1.5,
    right: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
});

export default Header;

import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ConfirmModal from "./ConfirmModal";
import Icon from "react-native-vector-icons/FontAwesome";
import IconBtn from "./IconBtn";

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
        {props.itemsLength != 0 && (
          <IconBtn
            header
            btnAction={() => setModalVisible(true)}
            iconName="trash-o"
          />
        )}
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
});

export default Header;

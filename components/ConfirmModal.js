import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from "react-native";

function ConfirmModal(props) {
  return (
    <Modal animationType="fade" transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{props.modalText}</Text>
          <View style={styles.btnWrapper}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "grey" }}
              onPress={() => props.onCancel()}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#ff577f" }}
              onPress={() => props.onConfirm()}
            >
              <Text style={styles.textStyle}>Confirm</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 12,
    marginTop: 90,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 4,
    padding: 10,
    elevation: 2,
    margin: 5,
    fontSize: 16,
  },
  btnWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
    color: "grey",
  },
});

export default ConfirmModal;

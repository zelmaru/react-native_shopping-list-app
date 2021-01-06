import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function AddItem(props) {
  const [text, setText] = useState("");
  // // view or hide button depending on input field focus
  // const [focus, setFocus] = useState(false);

  const onChange = (textValue) => {
    setText(textValue);
  };

  const onSent = () => {
    setText("");
    props.addItem(text);
    // setFocus(false);
  };

  // const viewBtn = () => {
  //   setFocus(true);
  // };

  // const hideBtn = () => {
  //   setFocus(false);
  // };

  return (
    <View style={styles.addContainer}>
      <TextInput
        placeholder="New item..."
        //bind the value (to clear the input after sending)
        value={text}
        style={styles.input}
        onChangeText={onChange}
        // onFocus={viewBtn}
        // onBlur={!text && hideBtn}
      />
      <TouchableOpacity style={styles.btn} onPress={onSent}>
        {/* <Text style={styles.btnText}> */}
        <Icon name="plus" size={24} color="#fff" />
        {/* </Text> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 12,
    marginRight: 12,
  },
  input: {
    height: 50,
    borderRadius: 4,
    fontSize: 16,
    marginBottom: 12,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    width: "80%",
    paddingLeft: 17,
  },
  btn: {
    backgroundColor: "#ff577f",
    padding: 9,
    borderRadius: 50,
    width: 46,
    height: 46,
    elevation: 2,
    // margin: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    textAlign: "center",
  },
});

export default AddItem;

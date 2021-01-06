import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import IconBtn from "./IconBtn";
function AddItem(props) {
  const [text, setText] = useState("");

  const onChange = (textValue) => {
    setText(textValue);
  };

  const onSent = () => {
    setText("");
    props.addItem(text);
  };

  return (
    <View style={styles.addContainer}>
      <TextInput
        placeholder="New item..."
        //bind the value (to clear the input after sending)
        value={text}
        style={styles.input}
        onChangeText={onChange}
      />
      <IconBtn round btnAction={onSent} iconName="plus" />
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
});

export default AddItem;

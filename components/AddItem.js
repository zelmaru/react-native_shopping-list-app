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
  const [focus, setFocus] = useState(false);
  const onChange = (textValue) => {
    setText(textValue);
  };

  const onSent = () => {
    setText("");
    props.addItem(text);
  };

  const viewBtn = () => {
    setFocus(true);
  };

  const hideBtn = () => {
    setFocus(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New item..."
        //bind the value to clear input after sending
        value={text}
        style={styles.input}
        onChangeText={onChange}
        onFocus={viewBtn}
        onBlur={!text && hideBtn}
      />
      {focus && (
        <TouchableOpacity style={styles.btn} onPress={onSent}>
          <Text style={styles.btnText}>
            <Icon name="plus" size={30} color="#fff" />
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {
    height: 60,
    padding: 9,
    border: "2px solid grey",
    textAlign: "center",
    borderRadius: 4,
    fontFamily: "Raleway_500Medium",
    marginBottom: 12,
  },
  btn: {
    backgroundColor: "#ff577f",
    padding: 9,
    borderRadius: 50,
    width: 46,
    height: 46,
    margin: "auto",
  },
  btnText: {
    color: "darkblue",
    fontSize: 20,
    textAlign: "center",
  },
});

export default AddItem;

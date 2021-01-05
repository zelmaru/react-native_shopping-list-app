import React, { useState } from "react";
import {
  SafeAreaView,
  ActivityIndicator,
  View,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import { uuid } from "uuidv4";
import {
  useFonts,
  Raleway_500Medium,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";

import Header from "./components/Header.js";
import ListItem from "./components/ListItem.js";
import AddItem from "./components/AddItem";
import Wrapper from "./components/Wrapper";

const App = (props) => {
  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter an item", { text: "OK" });
    } else {
      setItems((prevItems) => {
        return [...prevItems, { id: uuid(), text }];
      });
    }
  };

  let [fontsLoaded] = useFonts({
    Raleway_500Medium,
    Raleway_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#ff577f" />;
  } else {
    return (
      <SafeAreaView>
        <View style={[styles.container, { fontFamily: "Raleway_500Medium" }]}>
          <Header title="My Basket" />
          <Wrapper>
            <AddItem addItem={addItem} />
            <FlatList
              style={styles.flatList}
              data={items}
              inverted
              renderItem={({ item }) => (
                <ListItem item={item} deleteItem={deleteItem} />
              )}
            />
          </Wrapper>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingTop: 30,
  },
  flatList: {
    marginTop: 12,
  },
});

export default App;

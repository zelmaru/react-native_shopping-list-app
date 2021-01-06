import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  ActivityIndicator,
  View,
  StyleSheet,
  FlatList,
} from "react-native";

import {
  useFonts,
  Raleway_500Medium,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";

import Header from "./components/Header.js";
import ListItem from "./components/ListItem.js";
import AddItem from "./components/AddItem";
import Wrapper from "./components/Wrapper";

// generate unique IDs
const uuid = () => {
  return "00000000-0000-4000-8000-000000000000".replace(/0/g, function () {
    return (0 | (Math.random() * 16)).toString(16);
  });
};

const App = (props) => {
  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    //prevent from sending an empty field
    if (text) {
      setItems((prevItems) => {
        return [...prevItems, { id: uuid(), text }];
      });
    }
  };

  const clearAll = () => {
    setItems("");
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
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={[styles.container, { fontFamily: "Raleway_500Medium" }]}>
            <Header clearAll={clearAll} />
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
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    fontFamily: "Raleway_500Medium",
  },
  flatList: {
    margin: 12,
  },
});

export default App;

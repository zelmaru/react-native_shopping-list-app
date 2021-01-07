import React, { useState } from "react";
import {
  Share,
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
import IconBtn from "./components/IconBtn";

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
    setItems([]);
  };

  let [fontsLoaded] = useFonts({
    Raleway_500Medium,
    Raleway_700Bold,
  });

  // get an array of items text only
  const msgArray = items.map((item) => "▪ " + item.text).reverse();
  // concatenate that array to a string adding separators
  const msgText = msgArray.join("\n");

  // enable sharing shopping list as pure text
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Shopping List:\n" + msgText,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#ff577f" />;
  } else {
    return (
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={[styles.container, { fontFamily: "Raleway_500Medium" }]}>
            <Header clearAll={clearAll} itemsLength={items.length} />
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
              {items.length != 0 && (
                <IconBtn shareBtn btnAction={onShare} iconName="share-alt" />
              )}
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

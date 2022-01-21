import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Friend #1",
    },
    {
      name: "Friend #2",
    },
    {
      name: "Friend #3",
    },
    {
      name: "Friend #4",
    },
    {
      name: "Friend #5",
    },
    {
      name: "Friend #6",
    },
  ];
  return (
    <View>
      <Text>List of friend</Text>
      <FlatList
        horizontal={true} //scrow list items from left to right
        showsHorizontalScrollIndicator={false} // hind the scroll indicator at the bottom of the screen
        // key prop is required.
        keyExtractor={(friend) => friend.name}
        //   pass the data prop. this is name of the array. is required
        data={friends}
        //   pass the renderItem prop. required
        //   similar to map function, renderItem function is called on every element (individual item)
        //   element does not refer to the list item.
        //   it has several properties including name (item name) and index. console.log(element to see)
        // renderItem={(element) => {
        //   //   element === {item: {name: Friend #1}, index: 0}
        //   // you can use item as a parameter to destructure the element object and obtain the name directly
        //       }}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;

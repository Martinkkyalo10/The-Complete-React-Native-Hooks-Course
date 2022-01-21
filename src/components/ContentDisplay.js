import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ContentDisplay = () => {
  const myName = <Text>Martin Kyalo</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>
        This a text React Native Primitive Element.
      </Text>
      <Text style={styles.subHeaderStyle}>My name is {myName}</Text>
    </View>
  );
};

// component styling
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ContentDisplay;

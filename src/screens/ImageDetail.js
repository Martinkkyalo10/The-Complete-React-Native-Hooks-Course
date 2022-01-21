import React from "react";
import { View, Text, StyleSheet } from "react-native";

// recieve props to pass information from parent to child
const ImageDetail = (props) => {
  console.log(props);
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageDetail;

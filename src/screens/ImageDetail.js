import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// recieve props to pass information from parent to child
const ImageDetail = (props) => {
  console.log(props);
  return (
    <View>
      {/* require statement provide the path of the image location */}
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageDetail;

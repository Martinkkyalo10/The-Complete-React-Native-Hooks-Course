import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "./ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="beach"
        imageSource={require("../../assets/beach.jpg ")}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg ")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageScreen;

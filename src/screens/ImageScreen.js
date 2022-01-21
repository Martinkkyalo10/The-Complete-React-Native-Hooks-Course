import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "./ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" />
      <ImageDetail title="beach" />
      <ImageDetail title="Mountain" />
    </View>
  );
};

const styles = StyleSheet.create({});
export default ImageScreen;
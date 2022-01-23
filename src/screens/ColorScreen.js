import React from "react";
import { Button, View } from "react-native";

export default function ColorScreen() {
  return (
    <View>
      <Button title="Add a Color" />
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
    </View>
  );
}

// helper function for creating random colors
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // return random rgb
  retun`rgd(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

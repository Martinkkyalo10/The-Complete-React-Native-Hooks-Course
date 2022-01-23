import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "./../components/ColorCounter";

// adjusting colors
const COLOR_INCREMENT = 15;

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  return (
    <View>
      {/* add two callback fanctions to increase or decrease color counter */}
      <ColorCounter
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        color="Green"
      />
      <View
        //   inline style represents an object with hieght, width and backgroundColor as propeties
        style={{
          hieght: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

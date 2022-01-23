import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "./../components/ColorCounter";

// adjusting colors
const COLOR_INCREMENT = 15;

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  // helper function to validate state change by ensuring color value is not above 255 and below 0 (-ve value)
  const setColor = (color, change) => {
    //   color === 'red', 'blue', 'green'
    // change== +15, -15
    switch (color) {
      case "red":
        //  using tenary expression
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        //  using tenary expression
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        //  using tenary expression
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      {/* add two callback fanctions to increase or decrease color counter */}
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
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

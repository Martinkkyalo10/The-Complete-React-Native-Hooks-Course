import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "./../components/ColorCounter";

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  return (
    <View>
      {/* add two callback fanctions to increase or decrease color counter */}
      <ColorCounter
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        color="Red"
      />
      <ColorCounter color="Blue" />
      <ColorCounter color="Greed" />
    </View>
  );
}

const styles = StyleSheet.create({});

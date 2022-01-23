import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// recieve color, onIncrease, onDecrease as distructed property
export default function ColorCounter({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      {/* pass the callback functions recieved as props from the parent component */}
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
}

const styles = StyleSheet.create({});

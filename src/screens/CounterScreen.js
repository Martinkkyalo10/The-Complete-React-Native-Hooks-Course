import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function CounterScreen() {
  // erray destructuring
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>Current Count: {counter}</Text>
      <Button
        title="Increase Count"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease Count"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

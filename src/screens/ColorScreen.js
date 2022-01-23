import React, { useState } from "react";
import { Button, View } from "react-native";

export default function ColorScreen() {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          // the spread operator enable u to expand an object, string
          //or an array into its indivial elements
          // the Rest operator does the inverse by reducing a set of elements into one array or object
          setColors([...colors, randomRgb()]);
          // the setColors functon creates a brand new array,
          // the ...colors (spread operator) takes all elements of calor array and adds them inside the new array
        }}
      />
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

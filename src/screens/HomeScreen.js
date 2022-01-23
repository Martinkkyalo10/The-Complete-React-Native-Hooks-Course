import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello world</Text>
      {/* adding a Button component to show button */}
      <Button
        // adding text on a button
        title="Go to Components Demo"
        // detecting user press
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Adjust Color"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

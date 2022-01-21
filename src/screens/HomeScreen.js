import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello world</Text>
      {/* adding a Button component to show button */}
      <Button
        // adding text on a button
        title="Go to Components Demo"
        // detecting user press
        onPress={() => console.log("Button pressed")}
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

import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "./../components/ColorCounter";

// adjusting colors
const COLOR_INCREMENT = 15;

//   define reducer
const reducer = (state, action) => {
  // state=== {red: number, green: number, blue: number}
  // action=== {colorToChange: 'red' || 'green' || 'blue', amount: 15||-15 }
  switch (action.colorToChange) {
    case "red":
      return {
        // making a new object by taking the existing state of the object and copying them into the new one
        ...state,
        // overwriting the existing red property
        red: state.red + action.amount,
      };
    case "green":
      return {
        // making a new object by taking the existing state of the object and copying them into the new one
        ...state,
        // overwriting the existing red property
        green: state.green + action.amount,
      };

    case "blue":
      return {
        // making a new object by taking the existing state of the object and copying them into the new one
        ...state,
        // overwriting the existing red property
        blue: state.blue + action.amount,
      };

    default:
      return state;
  }
};

export default function SquareScreen() {
  // refactoring to manage state using reducer
  //   state cannot be managed using useState hook abd reducer at the same time

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 }); //this is the initial state
  const { red, green, blue } = state;
  return (
    <View>
      {/* add two callback fanctions to increase or decrease color counter */}
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
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

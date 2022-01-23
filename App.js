// In App.js in a new project

import {
  createNativeStackNavigator,
  createAppContainer,
} from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ContentDisplay from "./src/components/ContentDisplay";
import ListScreen from "./src/components/FlatList";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";

// what is to be dispayed on the screen
const navigator = createNativeStackNavigator(
  {
    Home: HomeScreen,
    Components: ContentDisplay,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
  },
  {
    // the first component that should be desplayed
    initialRouteName: "Home",
    defaultNavifationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

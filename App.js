import React, { useState } from "react";
import { LogBox } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Navigation from "./app/navigation/Navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "./app/utils/firebase";

//Omitting setting time warning
LogBox.ignoreLogs(["Setting a timer", "AsyncStorage"]);

//Loading fonts families
const getFonts = () => Font.loadAsync({
  'JosefinSans-Light': require("./assets/fonts/JosefinSans-Light.ttf"),
  'Quicksand-Regular': require("./assets/fonts/Quicksand-Regular.ttf"),
  'JosefinSans-SemiBold': require("./assets/fonts/JosefinSans-SemiBold.ttf"),
  'Montserrat-Regular': require("./assets/fonts/Montserrat-Regular.ttf"),
  'Montserrat-SemiBold': require("./assets/fonts/Montserrat-SemiBold.ttf"),
  'Quicksand-Medium': require("./assets/fonts/Quicksand-Medium.ttf"),
  'Quicksand-Regular': require("./assets/fonts/Quicksand-Regular.ttf"),
  'Quicksand-SemiBold': require("./assets/fonts/Quicksand-SemiBold.ttf"),
  'Raleway-Regular': require("./assets/fonts/Raleway-Regular.ttf"),

})

//Using Navigation, it allow us to authenticate us and have acccess to the complete app
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <Navigation />
    )
  } else {
    return (<AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={(error) => console.log("Error" + error)}
    />
    )
  }
}

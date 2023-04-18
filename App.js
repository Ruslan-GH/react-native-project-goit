import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

// import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./Images/photoBG.png")}
        resizeMode="cover"
        style={styles.image}
      >
        {/* <RegistrationScreen /> */}
        <LoginScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 28,
    textAlign: "center",
  },
});

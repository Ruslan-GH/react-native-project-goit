import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  ImageBackground,
  Button,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation }) => {
  console.log("navigation", navigation);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false), Keyboard.dismiss(), setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground
        source={require("../../Images/photoBG.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.box,
              paddingBottom: isShowKeyboard ? 20 : 144,
            }}
          >
            <Text style={styles.header}>Увійти</Text>
            <TextInput
              placeholder="Адреса електронної пошти"
              style={styles.input}
              onFocus={() => setIsShowKeyboard(true)}
              value={state.email}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))
              }
            />
            <TextInput
              placeholder="Пароль"
              secureTextEntry={true}
              style={styles.input}
              onFocus={() => setIsShowKeyboard(true)}
              value={state.password}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
            >
              {/* <Text style={styles.btnPassword}>Показати</Text> */}
            </TextInput>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={keyboardHide}
            >
              <Text style={styles.btnTitle}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <View
                style={{
                  ...styles.askAccount,
                  opacity: isShowKeyboard ? 0 : 1,
                }}
              >
                <Text style={styles.askAccount}>
                  Немає акаунта? <Text> </Text>
                  <Text
                    style={{
                      ...styles.askAccount,
                      color: "#0000ff",
                    }}
                  >
                    Зареєструватися
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end",
  },
  box: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    // position: "relative",
  },
  input: {
    width: 343,
    height: 50,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    marginBottom: 16,
    borderRadius: 8,
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
    marginTop: 32,
    marginBottom: 32,
    fontFamily: "Roboto-Regular",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: 343,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 27,
  },
  btnTitle: {
    color: "#FFFFFF",
    fontWeight: 400,
    fontSize: 16,
  },
  askAccount: {
    textAlign: "center",
    fontWeight: 400,
    fontSize: 16,
    marginTop: 16,
  },
});

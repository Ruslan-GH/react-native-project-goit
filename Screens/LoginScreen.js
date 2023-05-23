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
} from "react-native";

// import * as Font from "expo-font";
// import AppLoading from "expo";

const initialState = {
  email: "",
  password: "",
};

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
//   });
// };

export const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false), Keyboard.dismiss(), setState(initialState);
  };

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
        <View
          style={{
            ...styles.form,
            paddingBottom: isShowKeyboard ? 16 : 130,
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
          <Text
            style={{
              ...styles.askAccount,
              opacity: isShowKeyboard ? 0 : 1,
            }}
          >
            Немає акаунта? Зареєструватися
          </Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    // height: 489,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 140,
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

import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  Image,
} from "react-native";
import { Camera } from "expo-camera";

import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  const sendPhoto = () => {
    console.log(navigation);
    navigation.navigate("Posts", { photo });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} ref={setCamera}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image
                source={{ uri: photo }}
                style={{ height: 200, width: 200 }}
              />
            </View>
          )}
          <TouchableOpacity onPress={takePhoto}>
            <View style={styles.ellipce}>
              <FontAwesome name="camera" size={20} color="#BDBDBD" />
            </View>
          </TouchableOpacity>
        </Camera>
      </View>

      <View style={styles.textContainer}>
        <View>
          <Text style={styles.text}>Завантажте фото</Text>
        </View>
        <View>
          <Text style={styles.text}>Назва...</Text>
        </View>
        <View>
          <Text style={styles.text}>
            <View style={{ marginRight: 8 }}>
              <Feather name="map-pin" size={16} color="#BDBDBD" />
            </View>
            <Text>Місцевість...</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={sendPhoto}>
            <Text style={{ color: "#BDBDBD" }}>Опублікувати</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  cameraContainer: {
    marginLeft: 16,
    marginRight: 16,
  },
  camera: {
    height: 240,
    width: "100%",
    marginTop: 32,
    border: 1,
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  ellipce: {
    backgroundColor: "#FFFFFF",
    color: "#FFFFFF",
    width: 60,
    height: 60,
    borderRadius: 50,
    marginTop: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginTop: 8,
    marginLeft: 16,
  },
  text: {
    color: "#BDBDBD",
    fontSize: 16,
    marginBottom: 48,
  },
  buttonContainer: {
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    marginRight: 16,
    borderRadius: 100,
  },
  takePhotoContainer: {
    position: "absolute",
    width: "100%",
    // marginLeft: 16,
    borderColor: "#fff",
    borderWidth: 1,
  },
});

export default CreatePostsScreen;

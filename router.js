import React from "react";
import { Button, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import { LoginScreen } from "./Screens/auth/LoginScreen";
import { RegistrationScreen } from "./Screens/auth/RegistrationScreen";
import PostsScreen from "./Screens/mainScreens/PostsScreen";
import CreatePostsScreen from "./Screens/mainScreens/CreatePostsScreen";
import ProfileScreen from "./Screens/mainScreens/ProfileScreen";

import { Feather } from "@expo/vector-icons";

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={24} color="#212121" />
          ),
          title: "Публікації",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#212121" },
          headerRight: ({ focused, size, color }) => (
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              marginRight={10}
            />
          ),
        }}
      ></MainTab.Screen>
      <MainTab.Screen
        options={{
          headerTitleAlign: "center",
          title: "Створити публікацію",
          headerTitleStyle: { color: "#212121" },
          headerLeft: ({ focused, size, color }) => (
            <Feather
              name="arrow-left"
              size={24}
              color="#212121"
              marginLeft={10}
            />
          ),
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                width: 70,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#FF6C00",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Feather name="plus" size={24} color="#FFFFFF" />
            </View>
          ),
          tabBarIconStyle: { backGroundColor: "red" },
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      ></MainTab.Screen>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color="#212121" />
          ),
          title: "Профіль",
          headerTitleAlign: "center",
        }}
        name="Profile"
        component={ProfileScreen}
      ></MainTab.Screen>
    </MainTab.Navigator>
  );
};

export default useRoute;

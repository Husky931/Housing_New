import React from "react";
import {
  HomeScreen,
  Chat,
  Liked,
  Me,
  Add,
} from "../navigation/tabNavigation-HomeBottom/";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabNavigationHomeBottom() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "пораки") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (route.name === "додади") {
            // iconName = focused ? "add-circle" : "add-circle-outline";
            iconName = "add-circle";
          } else if (route.name === "фаворити") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "јас") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={25} color="#2eb6b6" />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="пораки" component={Chat} options={{ tabBarBadge: 3 }} />
      <Tab.Screen
        name="додади"
        component={Add}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ size }) => (
            <Ionicons
              name="add-circle"
              color="#2eb6b6"
              size={43}
              style={{ position: "absolute", top: 0 }}
            />
          ),
        }}
      />
      <Tab.Screen name="фаворити" component={Liked} />
      <Tab.Screen name="јас" component={Me} />
    </Tab.Navigator>
  );
}

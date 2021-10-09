import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import globalStyles from "../globalStylesheet/app";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default function RoundButton({
  icon,
  type,
  text,
  size,
  bgColor,
  textColor,
  iconColor,
  onPressAction,
}) {
  return (
    <TouchableOpacity
      style={[styles.btn, bgColor]}
      onPress={onPressAction}
      activeOpacity={0.75}
    >
      <View style={[globalStyles.row]}>
        <Text style={[styles.text, globalStyles.m_l_r_5, textColor]}>
          {text}
        </Text>
        <Icon type={type} name={icon} size={size} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 250,
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2%",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    zIndex: 20000,
  },
  text: {
    fontWeight: "bold",
    fontSize: responsiveFontSize(2.7),
  },
});

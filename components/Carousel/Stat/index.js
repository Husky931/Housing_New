import React from "react";
import { View, Text, Image } from "react-native";
import globalStylesheet from "../../../globalStylesheet/app";
import { styles } from "./styles";

export const Stat = (props: any) => {
  const { label, value } = props;
  return (
    <>
      <View style={styles.stat}>
        <Image source={value.image[0]} style={styles.img} />
        <Text
          style={[globalStylesheet.fontWeight700, globalStylesheet.m_t_b_2]}
        >
          {value.price} denari
        </Text>
        <Text numberOfLines={1}>{value.address}</Text>
      </View>
    </>
  );
};

export default Stat;

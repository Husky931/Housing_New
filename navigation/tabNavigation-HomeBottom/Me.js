import React, { useState } from "react";
import { ScrollView, Text, TextInput, StyleSheet } from "react-native";
import globalStyles from "../../globalStylesheet/app";

const borderColor = globalStyles.primaryColor.color;

export default function Me({ name }) {
  const [stateName, stateSetter] = useState({...styles.input});
  const [stateEmail, stateSetter1] = useState({...styles.input});
  const [stateDate, stateSetter2] = useState({...styles.input});
  const onBlur = (setState) =>
    setState({ ...styles.input, borderColor });
  const onFocus = (setState) =>
    setState({ ...styles.input, borderColor: globalStyles.red.color });
  return <>
    <ScrollView style={styles.rootView}>
      {/* <Text style={styles.label}>Name</Text> */}
      <TextInput
        style={stateName}
        // onChangeText={onChangeNumber}
        value={name}
        placeholder="Full name"
        autoCapitalize="words"
        autoCompleteType="name"
        onBlur={() => onBlur(stateSetter)}
        onFocus={() => onFocus(stateSetter)}
        // keyboardType="numeric"
      />
      {/* <Text style={styles.label}>Email</Text> */}
      <TextInput
        style={stateEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
        onBlur={() => onBlur(stateSetter1)}
        onFocus={() => onFocus(stateSetter1)}
      />
      {/* <Text style={styles.label}>I am me screen</Text> */}
      <TextInput
        style={stateDate}
        placeholder="Date"
        keyboardType="numeric"
        onBlur={() => onBlur(stateSetter2)}
        onFocus={() => onFocus(stateSetter2)}
      />
    </ScrollView>
  </>;
}

const styles = StyleSheet.create({
  rootView: {
    // backgroundColor: "#f0f8ff",
    // backgroundColor: "#ffffff",
    height: "100%",
    paddingTop: '12%',
    paddingRight: '8%',
    paddingBottom: '8%',
    paddingLeft: '8%',
  },
  label: {
    marginLeft: 7,
    fontSize: 18,
    fontWeight: "200",
    marginBottom: 6
  },
  input: {
    borderColor,
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 22,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 21,
    color: "#f0f0f0"
  }
});

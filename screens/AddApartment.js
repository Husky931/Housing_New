import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import globalStyles from "../globalStylesheet/app";
import { Ionicons } from "@expo/vector-icons";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import httpRequest from "../util/httpReq";

export default function AddApartment() {
  const [displayModal, setDisplayModal] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser() {
    let user = {
      fname: name,
      lname: lastName,
      email,
      pwd: password,
    };
    // await httpRequest("/register", "POST", user);
    let bla = await httpRequest("/register", "POST", user);

    console.log(bla, "i am  bla register");
  }
  async function logInUser() {
    let user = {
      email,
      password,
    };

    let bla = await httpRequest("/login", "POST", user);

    console.log(bla.status, bla.data, "i am  bla login");
  }
  async function getUser() {
    await httpRequest("/listings");
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagePreview}
        source={require("../images/front-image.jpg")}
      />
      <View style={styles.signUpBox}>
        <Pressable
          style={styles.signUpForm}
          onPress={() => setDisplayModal(!displayModal)}
        >
          <Ionicons name="mail" size={25} color="#2eb6b6" />
          <Text
            style={[
              globalStyles.m_l_r_6,
              globalStyles.fontSize2,
              globalStyles.fontWeight700,
            ]}
          >
            Register with email
          </Text>
        </Pressable>
        {/* <View style={styles.signUpForm}>
          <Ionicons name="call" size={25} color="#2eb6b6" />
          <Text style={[globalStyles.m_l_r_6]}>Register with phone</Text>
        </View> */}
        <View style={styles.signUpForm}>
          <Ionicons name="logo-apple" size={25} color="#2eb6b6" />
          <Text
            style={[
              globalStyles.m_l_r_6,
              globalStyles.fontSize2,
              globalStyles.fontWeight700,
            ]}
          >
            Register with Apple
          </Text>
        </View>
        <View style={styles.signUpForm}>
          <Ionicons name="logo-google" size={25} color="#2eb6b6" />
          <Text
            style={[
              globalStyles.m_l_r_6,
              globalStyles.fontSize2,
              globalStyles.fontWeight700,
            ]}
          >
            Register with Google
          </Text>
        </View>
        <View style={styles.logInForm}>
          <Ionicons name="log-in" size={25} color="white" />
          <Text
            style={[
              globalStyles.m_l_r_6,
              styles.textColortextColor,
              globalStyles.fontSize2,
              globalStyles.fontWeight700,
            ]}
          >
            LOG IN
          </Text>
        </View>
      </View>
      {displayModal && (
        <View style={styles.modalBox}>
          <TextInput
            style={styles.input}
            // onChangeText={(e) => handleName(e)}
            onChangeText={(e) => setName(e)}
            value={name}
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => setLastName(e)}
            value={lastName}
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => setEmail(e)}
            value={email}
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => setPassword(e)}
            value={password}
          />
          <Button
            onPress={() => registerUser()}
            title="Register"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={styles.btn}
          />
          <Button
            onPress={() => logInUser()}
            title="Login"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={styles.btn}
          />
          <Button
            onPress={() => getUser()}
            title="getApartments"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={styles.btn}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    opacity: 0.795,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  modalBox: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "black",
    color: "white",
  },
  imagePreview: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  signUpBox: {
    backgroundColor: "white",
    width: "90%",
    padding: 10,
    borderRadius: 13,
  },
  signUpForm: {
    // borderStyle: "dotted",
    borderWidth: 1,
    borderColor: "#2eb6b6",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logInForm: {
    // borderStyle: "dotted",
    borderWidth: 1,
    borderColor: "#2eb6b6",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2eb6b6",
  },
  textColor: {
    color: "#2eb6b6",
  },
  textColortextColor: {
    color: "white",
  },
  btn: {
    opacity: 1,
  },
});

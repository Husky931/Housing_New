import React, { useState, useRef } from "react";
import {
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Platform,
} from "react-native";
import Constants from 'expo-constants';
import i18n from 'i18n-js';
import { Ionicons } from "@expo/vector-icons";
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
// import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  HomeScreen,
  Chat,
  Liked,
  Me,
  Add,
} from "../navigation/tabNavigation-HomeBottom/";
import { deviceHasNotch } from '../components/deviceHasNotch';
import globalStyles from "../globalStylesheet/app";


const isIosDeviceWithNotch =
  Platform.OS === 'ios' &&
  deviceHasNotch(Constants.platform.ios.model.toLowerCase()) ?
    true:
    false;

export default function curvedBottomBar() {

  const ref = useRef();
  const [type, setType] = useState('down');

  const onClickButton = () => {
    if (type === 'up') {
      setType('down');
      // alert('Change type curve down');
    } else {
      setType('up');
      // alert('Change type curve up');
    }
    // navigator.navigate('');
  }

  const _renderIcon = (routeName, selectTab) => {
    let icon = '';

    switch (routeName) {
      case 'bottomTabNav.home':
        icon = 'home-outline';
        break;
      case 'bottomTabNav.chat':
        icon = 'chatbubbles-outline';
        break;
      case 'bottomTabNav.liked':
        icon = 'heart-outline';
        break;
      case 'bottomTabNav.me':
        icon = 'person-outline';
        break;
    }

    return (
      <Ionicons name={icon} size={28} color={routeName === selectTab ? globalStyles.red.color : '#999' } />
    );
  };

  return (
    <CurvedBottomBar.Navigator
      ref={ref}
      // style={[type === 'down' && {backgroundColor: '#F5F5F5'}]}
    //   style={{ paddingBottom: 20 }}
      // style={{ backgroundColor: 'red' }}
      type={type}
      height={isIosDeviceWithNotch ? 72 : 60}
      circleWidth={55}
      bgColor={useColorScheme() === 'dark' ? '#333' : '#fff'}
      borderTopLeftRight={true}
      // swipeEnabled={true}
      // strokeWidth={1}
      initialRouteName="bottomTabNav.home"
      renderCircle={() => (
        <TouchableOpacity
          style={[type === 'down' ? styles.btnCircle : styles.btnCircleUp]} onPress={onClickButton}
        >
          <Ionicons name="add-outline" size={28} style={{ color: "#fff" }} />
        </TouchableOpacity>
      )}
      tabBar={({ routeName, selectTab, navigate }) => {
        return (
          <TouchableOpacity
            onPress={() => navigate(routeName)}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 10 }}
          >
            {_renderIcon(routeName, selectTab)}
            <Text style={{ color: '#999', fontSize: 10 }}>{i18n.t(routeName)}</Text>
          </TouchableOpacity>
        );
      }}
    >
      <CurvedBottomBar.Screen
        name="bottomTabNav.home"
        position="left"
        component={({ navigate }) => HomeScreen()}
      />
      <CurvedBottomBar.Screen
        name="bottomTabNav.chat"
        component={({ navigate }) => <SafeAreaView style={{ flex: 1 }}>{Chat('some name')}</SafeAreaView>}
        position="left"
      />
      <CurvedBottomBar.Screen
        name="bottomTabNav.liked"
        component={({ navigate }) => <SafeAreaView style={{ backgroundColor: '#BFEFFF', flex: 1 }}>{Liked('some name')}</SafeAreaView>}
        position="right"
      />
      <CurvedBottomBar.Screen
        name="bottomTabNav.me"
        component={({ navigate }) => <SafeAreaView style={{ }}>{Me('')}</SafeAreaView>}
        position="right"
      />
    </CurvedBottomBar.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexShrink: 1
    // paddingBottom: 60
    // backgroundColor: 'red'
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2eb6b6',
    color: "#fff",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 1,
    // bottom: 28
    bottom: isIosDeviceWithNotch ? 18 : 26
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2eb6b6',
    bottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: '#48CEF6'
  },
  img: {
    width: 30,
    height: 30,
  }
});

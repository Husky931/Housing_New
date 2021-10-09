import "react-native-gesture-handler";
import React, { useState } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { SafeAreaProvider as Safer } from "react-native-safe-area-context";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

import mk from "./languages/macedonian.json";
import en from "./languages/english.json";
import ApartmentsListOverview from "./screens/ApartmentsListOverview";
import ApartmentClicked from "./screens/ApartmentClicked";
import AddApartment from "./screens/AddApartment";
import CurvedBottomBar from "./navigation/CurvedBottomBar";
import { ThemeProvider } from "./theme";

// Set default language
Localization.locale = "mk";
Localization.currency = "MKD";
Localization.isMetric = true;

// Set the key-value pairs for the different languages you want to support.
i18n.translations = { mk, en };
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

const Stack = createStackNavigator();
// export const GlobalData = createContext();

const STYLES = ["default", "dark-content", "light-content"];
const TRANSITIONS = ["fade", "slide", "none"];

export default function App() {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0]
  );

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyleOld = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarStyle = () =>
    useColorScheme() === "light"
      ? setStatusBarStyle(STYLES[2])
      : setStatusBarStyle(STYLES[1]);

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  // useColorScheme() === 'light' ?
  //   setStatusBarStyle(STYLES[2]):
  //   setStatusBarStyle(STYLES[1]); // Initial setting

  // Appearance.addChangeListener(() => {
  //   changeStatusBarStyle();
  // });

  return (
    <Safer>
      <ThemeProvider>
        {/* <GlobalData.Provider> */}
        {/* <StatusBar
          animated={true}
          // backgroundColor="#61dafb"
          backgroundColor={useColorScheme() === 'light' ? '#fff' : '#999'}
          barStyle="default"
          showHideTransition="fade"
          // hidden={hidden}
        /> */}
        <NavigationContainer
          theme={useColorScheme() === "light" ? DefaultTheme : DarkTheme}
        >
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="bottomTabNav.home"
              component={CurvedBottomBar}
            />
            <Stack.Screen
              name={i18n.t("apartmentsListOverviewTitle")}
              component={ApartmentsListOverview}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="ApartmentClicked"
              component={ApartmentClicked}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="AddApartment"
              component={AddApartment}
              options={{
                headerShown: true,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </GlobalData.Provider> */}
      </ThemeProvider>
    </Safer>
  );
}

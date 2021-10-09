import React, { useState, useContext, useEffect } from "react";
import RoundButton from "../../components/RoundButton";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useWindowDimensions } from "react-native";
import i18n from "i18n-js";
import globalStyles from "../../globalStylesheet/app";
import { useNavigation } from "@react-navigation/native";
import { ApartmentData } from "../../apartmentData/ApartmentsList";
import { Carousel } from "../../components/Carousel";
import { GOOGLE_LOCATION_KEY } from "@env";
import * as Location from "expo-location";
import Gmaps from "../../components/Maps/Gmaps";

export default function HomeScreen() {
  const window = useWindowDimensions();
  let windowHeight = parseInt(window.height * 0.8);
  let windowWidth = parseInt(window.width * 0.8);

  const [pickCity, setPickCity] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let status = await Location.requestForegroundPermissionsAsync();
      console.log(status.granted, "i am status");
      if (status.granted === false) {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getLastKnownPositionAsync({
        accuracy: 6,
      });

      setLocation(location);
    })();
  }, []);

  console.log(errorMsg, "i am errorMsg", location, "i am location");

  const apartmentList = useContext(ApartmentData);
  const featuredApartments = apartmentList.filter((f) => f.featured === true);
  const sentFeaturedApartments = [];
  for (const featured of featuredApartments) {
    sentFeaturedApartments.push({
      value: featured,
    });
  }

  const navigation = useNavigation();

  const flipPickCity = () => {
    setPickCity(!pickCity);
  };

  const cities = [
    "Скопје",
    "Штип",
    "Охрид",
    "Дојран",
    "Преспа",
    "Битола",
    "Струмица",
    "Куманово",
    "Прилеп",
    "Тетово",
    "Велес",
    "Битола",
    "Струмица",
    "Куманово",
    "Прилеп",
    "Тетово",
    "Велес",
  ];

  return (
    <>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.scrollViewContainer}
      >
        {pickCity && (
          <Pressable
            style={styles.absolute_city_picker}
            onPress={() => flipPickCity()}
          >
            <Pressable
              style={[
                styles.absolute_city_picker_box,
                {
                  height: windowHeight,
                  width: windowWidth,
                  borderRadius: 10,
                },
              ]}
            >
              <View
                style={[
                  globalStyles.row,
                  globalStyles.width100,
                  globalStyles.mTopBottom_5,
                  globalStyles.mBottom10,
                  styles.height60,
                ]}
              >
                <Image
                  source={require("../../images/front-skopje.jpeg")}
                  style={[globalStyles.fr1, globalStyles.height100]}
                />
                <Image
                  source={require("../../images/front-ohrid.jpg")}
                  style={[
                    globalStyles.fr1,
                    globalStyles.height100,
                    globalStyles.m_l_r_5,
                  ]}
                />
                <Image
                  source={require("../../images/front-shtip.jpeg")}
                  style={[globalStyles.fr1, globalStyles.height100]}
                />
              </View>
              <ScrollView nestedScrollEnabled={true}>
                {cities.map((city, i) => (
                  <Pressable
                    key={i}
                    onPress={() => console.log(city)}
                    style={styles.cities_list_IndividualCity_View}
                  >
                    <Text style={styles.cities_list_IndividualCity_Text}>
                      {city}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            </Pressable>
          </Pressable>
        )}

        <View style={styles.topSection}>
          <ImageBackground
            style={styles.img}
            source={require("../../images/front-image-update.png")}
          >
            <View>
              <RoundButton
                icon="search"
                type="font-awesome"
                size={17}
                text="Пребарај"
                bgColor={{ backgroundColor: "#2eb6b6" }}
                textColor={{ color: "white" }}
                iconColor="white"
                onPressAction={() =>
                  navigation.navigate(i18n.t("apartmentsListOverviewTitle"))
                }
              />
              <RoundButton
                icon="chevron-down"
                type="font-awesome"
                size={17}
                text="Скопје"
                bgColor={{ backgroundColor: "white" }}
                textColor={{ color: "black" }}
                iconColor="black"
                onPressAction={() => flipPickCity()}
              />
              <RoundButton
                icon="chevron-down"
                type="font-awesome"
                size={17}
                text="Auth"
                bgColor={{ backgroundColor: "white" }}
                textColor={{ color: "black" }}
                iconColor="black"
                onPressAction={() => navigation.navigate("AddApartment")}
              />
            </View>
            {/* <View style={styles.whiteRoundArea}></View> */}
          </ImageBackground>
        </View>
        <View style={styles.midSection}>
          <View style={[globalStyles.m_t_b_20, styles.bgColorMain]}>
            <Text style={styles.around_you_section_heading}>
              Во твоја близина
            </Text>
            <Carousel
              style="stats"
              itemsPerInterval={3}
              items={sentFeaturedApartments}
            />
          </View>
          <Gmaps locationData={location} />
          <View style={globalStyles.m_t_b_20}>
            <Text style={styles.around_you_section_heading}>
              Во твоја близина
            </Text>
            <Carousel
              style="stats"
              itemsPerInterval={3}
              items={sentFeaturedApartments}
            />
          </View>
        </View>
        {/* <View style={styles.bottomSection}></View> */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    position: "relative",
  },
  // popUpModal: {
  //   height: "100%",
  //   position: "relative",
  // },
  absolute_city_picker: {
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  absolute_city_picker_box: {
    backgroundColor: "white",
    zIndex: 999,
    padding: "5%",
    marginTop: "10%",
  },
  topSection: {
    // maxHeight: "40%",
    height: responsiveHeight(40),
    paddingBottom: 10,
    backgroundColor: "#f0f8ff",
  },
  img: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  whiteRoundArea: {
    height: "3%",
    backgroundColor: "#f0f8ff",
    position: "absolute",
    bottom: -1,
    left: 0,
    right: 0,
    borderTopLeftRadius: 700,
    borderTopRightRadius: 700,
  },
  midSection: {
    width: "100%",
    backgroundColor: "#f0f8ff",
  },
  buttonSection: {
    alignItems: "center",
    marginTop: "-10%",
  },
  height60: {
    height: 60,
  },
  cities_list_IndividualCity_View: {
    margin: "2%",
    marginBottom: "6%",
    borderBottomWidth: 1,
    borderBottomColor: "silver",
  },
  cities_list_IndividualCity_Text: {
    fontSize: responsiveFontSize(2),
    fontWeight: "600",
    textAlign: "left",
    paddingBottom: 3,
  },
  bgColorMain: {
    backgroundColor: "#f0f8ff",
  },
  around_you_section_heading: {
    fontWeight: "bold",
    fontSize: responsiveFontSize(3),
    marginLeft: "5%",
  },
  around_you_section_apartments_list: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 10,
  },
  // midSection: {},
  // bottomSection: {},
});

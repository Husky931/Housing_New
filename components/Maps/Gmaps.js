import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GOOGLE_LOCATION_KEY } from "@env";
import Geocoder from "react-native-geocoding";
Geocoder.init(GOOGLE_LOCATION_KEY);
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function Gmaps({ locationData }) {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 3,
    lng: 3,
  });

  // console.log(locationData, "from inside Gmaps component");

  let getPosition = {
    lat: 3,
    lng: 3,
  };

  if (locationData !== null) {
    getPosition = {
      lat: parseFloat(locationData.coords.latitude),
      lng: parseFloat(locationData.coords.longitude),
    };
  }

  console.log(getPosition, "i am getPosition");

  return (
    <View>
      <Text>{getPosition.lat}</Text>
      <Text>{getPosition.lng}</Text>
      <View style={styles.mapContainer}>
        <MapView
          region={{
            latitude: getPosition.lat,
            longitude: getPosition.lng,
            latitudeDelta: 0.0024,
            longitudeDelta: 0.0013,
          }}
          style={styles.map}
        >
          <MapView.Marker
            coordinate={{
              latitude: getPosition.lat,
              longitude: getPosition.lng,
            }}
          />
          <MapView.Circle
            center={{ latitude: getPosition.lat, longitude: getPosition.lng }}
            radius={7}
            strokeWidth={0.5}
            strokeColor="red"
            fillColor="white"
          />
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "90%",
    height: 300,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#2eb6b6",
    borderRadius: 1,
  },
});

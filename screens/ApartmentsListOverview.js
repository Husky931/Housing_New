import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../globalStylesheet/app";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { ApartmentData } from "../apartmentData/ApartmentsList";
import { useNavigation } from "@react-navigation/native";

export default function ApartmentsListOverview() {
  const apartmentsListed = useContext(ApartmentData);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatListStyle}
        data={apartmentsListed}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ApartmentClicked", {
                apartmentID: item.id,
              })
            }
            style={styles.boxContainer}
          >
            <View style={styles.imagePreviewContainer}>
              <Image style={styles.imagePreview} source={item.image[0]} />
            </View>
            <View style={styles.textDescription}>
              <Text style={globalStyles.fontWeight600}>- {item.address}</Text>
              <Text style={globalStyles.fontWeight600}>
                - {item.squareFeet} m2
              </Text>
              <Text style={globalStyles.fontWeight600}>- {item.term}</Text>
              <Text style={globalStyles.fontWeight600}>- {item.type}</Text>
              <Text style={styles.price}>- {item.price} denari mesecno</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flatListStyle: {
    width: "100%",
    height: "auto",
  },
  boxContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "silver",
    marginTop: "2%",
  },
  imagePreviewContainer: {
    flex: 1,
    height: 115,
    padding: 10,
  },
  imagePreview: {
    height: "100%",
    width: "100%",
  },
  textDescription: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    fontWeight: "bold",
  },
  price: {
    color: "red",
    fontSize: responsiveFontSize(2),
    fontWeight: "700",
  },
});

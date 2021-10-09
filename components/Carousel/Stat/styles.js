import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  stat: {
    paddingHorizontal: 5,
    flexBasis: "33%",
    flex: 1,
    maxWidth: "33%",
    height: 180,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: 120,
  },
  // statText: {
  //   width: "100%",
  //   textAlign: "left",
  //   fontSize: 20,
  // },
  // statHold: {
  //   width: "100%",
  //   marginBottom: 8,
  // },
  statLabel: {
    width: "100%",
    textAlign: "left",
    fontSize: 11,
    fontWeight: "600",
    paddingTop: 5,
  },
});

export default styles;

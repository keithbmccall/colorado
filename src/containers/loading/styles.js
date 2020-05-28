import { StyleSheet } from "react-native";
import { colors } from "#styles";

export default StyleSheet.create({
  loadingView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    zIndex: 10
  },
  loadingAnimation: {
    color: colors.loadingAnimation
  }
});

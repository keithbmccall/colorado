import { StyleSheet } from "react-native";
import { globalStyle } from "#styles";

export default StyleSheet.create({
  colorStripWrapper: {
    ...globalStyle.absolute,
    left: 0,
    bottom: 0,
    height: "15%",
    width: "100%",
    flexDirection: "row"
  },
  flex1: {
    flex: 1
  },
  containerDefaultWrapper: {
    height: 50,
    width: "100%"
  }
});

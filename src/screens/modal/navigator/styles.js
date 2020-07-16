import { StyleSheet } from "react-native";
import { globalStyle, layoutGrid } from "#styles";

export default StyleSheet.create({
  navigatorWrapper: {
    ...layoutGrid.halfEight,
    ...globalStyle.flexRow,
    justifyContent: "space-between",
    ...globalStyle.alignCenter
    // ,...globalStyle.debug
  }
});

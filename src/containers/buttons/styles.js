import { StyleSheet } from "react-native";
import { globalStyle } from "#styles";

export default StyleSheet.create({
  full: {
    ...globalStyle.flexCenter,
    ...globalStyle.flex1
  }
});

import { StyleSheet } from "react-native";
import { colors } from "#styles";

export default StyleSheet.create({
  imageWrapper: {
    backgroundColor: "#ddd",
    borderWidth: 5,
    borderColor: colors.white
    // borderWidth: 5,
    // borderColor: "red"
  },
  selectedImageWrapper: {
    backgroundColor: "#ddd",
    borderWidth: 5,
    borderColor: colors.selectedBorder
  }
});

import { StyleSheet } from "react-native";
import { colors } from "#constants";

export default StyleSheet.create({
  imageWrapper: {
    backgroundColor: "#ddd",
    borderWidth: 5,
    borderColor: colors.white
  },
  selectedImageWrapper: {
    backgroundColor: "#ddd",
    borderWidth: 5,
    borderColor: colors.selectedBorder
  },
  studioGalleryWrapper: {
    flex: 8
  }
});

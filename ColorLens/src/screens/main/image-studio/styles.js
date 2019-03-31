import { StyleSheet, Dimensions } from "react-native";
//
const { height } = Dimensions.get("window");
export default StyleSheet.create({
  imageStudioWrapper: {
    // top: -height * 0.4,
    // height: height * 1.4
  },
  studioGalleryWrapper: {
    height: height / 2,
    width: "100%",
    paddingBottom:80
  },
  imageContentWrapper: {
    backgroundColor: "#ddd",
    borderWidth: 1,
    borderColor: "#fff"
  },
  focusedImageWrapper: {
    backgroundColor: "#aaa",
    height: height / 2
  }
});

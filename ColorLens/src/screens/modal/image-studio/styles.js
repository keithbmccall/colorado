import { StyleSheet,Dimensions } from "react-native";
const {height} = Dimensions.get('window')
export default StyleSheet.create({
  galleryImageWrapper: {
    backgroundColor: "#ddd",
    height: "100%",
    width: "100%",
    borderWidth:1,
    borderColor:'#fff'
  },
  focusedImageWrapper: {
    backgroundColor: "#aaa",
    height: "50%"
  }
});

import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
//
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  cameraView: {
    flex: 1
  },
  optionsContainer: {
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  optionsTrigger: {
    borderColor: "#91268d",
    borderWidth: 8,
    height: 80,
    width: 80,
    borderRadius: 80
  }
});

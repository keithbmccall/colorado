import { StyleSheet } from "react-native";
import { globalStyle } from "../../../styles-global";

export default StyleSheet.create({
  cameraView: {
    flex: 1
  },
  optionsContainer: {
    height: 100,
    backgroundColor: "#fff",
    ...globalStyle.flexCenter
  },
  optionsTrigger: {
    borderColor: "#91268d",
    borderWidth: 8,
    height: 80,
    width: 80,
    borderRadius: 80
  }
});

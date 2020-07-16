import { StyleSheet } from "react-native";
import { DEVICE_WIDTH, globalStyle, layoutGrid } from "#styles";
//

export default StyleSheet.create({
  imageContainer: {
    width: DEVICE_WIDTH,
    resizeMode: "contain"
  },
  colorStripContainer: {
    height: "100%"
  },
  colorStripWrapper: {
    ...globalStyle.flex1
  },
  chooserWrapper: {
    ...layoutGrid.half
  },
  inspectorWrapper: {
    ...layoutGrid.half
  }
});

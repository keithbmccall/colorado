import { StyleSheet } from "react-native";
import { DEVICE_HEIGHT, colors, globalStyle } from "#styles";
//

export default StyleSheet.create({
  cameraRollScreenWrapper: {
    flex: 1
  },
  animatedViewSlider: {
    ...globalStyle.absolute,
    width: "100%",
    height: 50,
    borderTopColor: colors.modalViewBackground,
    borderTopWidth: 2,
    borderStyle: "solid"
    // backgroundColor: colors.modalViewBackground
  },
  animatedViewPosition: {
    bottom: DEVICE_HEIGHT,
    top: DEVICE_HEIGHT * 0.85
  }
});

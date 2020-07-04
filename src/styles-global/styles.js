import { Dimensions } from "react-native";
//
export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");

export const globalStyle = {
  debug: {
    borderColor: "red",
    borderWidth: 2,
    borderStyle: "solid"
  },
  flex1: {
    flex: 1
  },
  justifyCenter: {
    justifyContent: "center"
  },
  alignCenter: {
    alignItems: "center"
  },
  textAlignCenter: {
    textAlign: "center"
  },
  bold: {
    fontWeight: "bold"
  },
  headerWrapper: {
    height: 70
  }
};

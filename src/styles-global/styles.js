import { Dimensions } from "react-native";
//
export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");

export const layoutGrid = {
  // height split on grid
  halfQuarter: {
    height: DEVICE_HEIGHT * 0.125
  },
  quarter: {
    height: DEVICE_HEIGHT * 0.25
  },
  half: {
    height: DEVICE_HEIGHT * 0.5
  },
  threeFourth: {
    height: DEVICE_HEIGHT * 0.75
  }
};

export const globalStyle = {
  debug: {
    borderColor: "red",
    borderWidth: 2
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
  flexCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  textAlignCenter: {
    textAlign: "center"
  },
  bold: {
    fontWeight: "bold"
  },
  headerWrapper: {
    height: 70
  },
  absolute: {
    position: "absolute"
  },
  wh100: {
    width: "100%",
    height: "100%"
  }
};

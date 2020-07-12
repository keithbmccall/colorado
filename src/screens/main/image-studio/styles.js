import { StyleSheet } from "react-native";
import { colors, DEVICE_HEIGHT, DEVICE_WIDTH, globalStyle, layoutGrid } from "#styles";

export default StyleSheet.create({
  imageStudioHeadingWrapper: {
    ...globalStyle.headerWrapper,
    ...globalStyle.justifyCenter,
    ...globalStyle.alignCenter
  },
  imageStudioHeading: {
    color: colors.primary
  },
  buttonBarWrapper: {
    ...globalStyle.absolute,
    top: DEVICE_HEIGHT * 0.92
  },
  buttonBarLabel: {
    fontStyle: "italic",
    color: colors.buttonLabel
  },
  imageStudioWrapper: {
    backgroundColor: "transparent",
    ...layoutGrid.half,
    position: "relative"
  },
  imageStudioEditButton: {
    ...globalStyle.absolute,
    top: 10,
    right: 10
  },
  imageStudioTrashButton: {
    ...globalStyle.absolute,
    top: 80,
    right: 10
  },
  directionsWrapperPosition: {
    bottom: DEVICE_HEIGHT,
    top: DEVICE_HEIGHT * 0.506
  },
  directionsWrapper: {
    height: DEVICE_HEIGHT * 0.506,
    width: "100%",
    backgroundColor: colors.semiTransparent,
    ...globalStyle.absolute,
    ...globalStyle.alignCenter,
    paddingTop: 20
  },
  directionsCard: {
    height: 90,
    width: DEVICE_WIDTH / 1.2,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  },
  directionsLabel: {
    marginTop: 5,
    marginBottom: 5
  },
  directionsSpan: {
    color: colors.primary,
    fontStyle: "italic"
  },
  imageStudioGalleryWrapper: {
    height: layoutGrid.half.height + globalStyle.headerWrapper.height
  }
});

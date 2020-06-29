import { StyleSheet } from "react-native";
import { colors, DEVICE_HEIGHT, DEVICE_WIDTH, globalStyle } from "#styles";

export default StyleSheet.create({
  imageStudioHeadingWrapper: {
    ...globalStyle.headerWrapper,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStudioHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary
  },
  buttonBarWrapper: {
    position: "absolute",
    top: DEVICE_HEIGHT * 0.92
  },
  buttonBarLabel: {
    fontStyle: "italic",
    color: colors.buttonLabel
  },
  imageStudioWrapper: {
    backgroundColor: "transparent",
    height: DEVICE_HEIGHT * 0.5,
    position: "relative"
  },
  imageStudioEditButton: {
    position: "absolute",
    top: 10,
    right: 10
  },
  imageStudioTrashButton: {
    position: "absolute",
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
    position: "absolute",
    alignItems: "center",
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
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "bold"
  },
  directionsSpan: {
    color: colors.primary,
    fontStyle: "italic"
  },
  imageStudioGalleryWrapper: {
    height: DEVICE_HEIGHT - (DEVICE_HEIGHT * 0.5 + globalStyle.headerWrapper.height)
  }
});

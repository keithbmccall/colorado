import { StyleSheet, Dimensions } from "react-native";
import { colors } from "#constants";

const { height, width } = Dimensions.get("window");
export default StyleSheet.create({
  imageStudioHeadingWrapper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStudioHeading: {
    fontSize: 20,
    fontWeight: "bold",
    // fontStyle: "italic",
    color: colors.primary
  },
  buttonBarWrapper: {
    flex: 2
  },
  buttonBarLabel: {
    fontStyle: "italic",
    color: colors.buttonLabel
  },
  imageStudioWrapper: {
    backgroundColor: "transparent",
    flex: 8,
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
  directionsWrapper: {
    height: height / 2.6,
    width: "100%",
    backgroundColor: colors.semiTransparent,
    position: "absolute",
    alignItems: "center",
    paddingTop: 20
  },
  directionsCard: {
    height: 90,
    width: width / 1.2,
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
  }
});

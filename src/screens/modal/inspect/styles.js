import { StyleSheet } from "react-native";
import { colors, DEVICE_HEIGHT } from "#styles";

export default StyleSheet.create({
  inspectorWrapper: {
    height: "100%"
  },
  inspectorTextWrapper: {
    top: DEVICE_HEIGHT * 0.05,
    left: 20
  },
  inspectorTextName: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white
  },
  inspectorText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white
  }
});

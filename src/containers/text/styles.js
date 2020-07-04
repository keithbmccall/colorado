import { StyleSheet } from "react-native";
import { colors, globalStyle } from "#styles";

export default StyleSheet.create({
  title: {
    fontSize: 24,
    ...globalStyle.bold,
    color: colors.primary
  },
  subtitle: {
    fontSize: 20,
    ...globalStyle.bold,
    color: colors.primary
  },
  sentence: {
    fontSize: 16,
    ...globalStyle.bold,
    color: colors.primary
  },
  small: {
    fontSize: 14,
    ...globalStyle.bold,
    color: colors.primary
  },
  centered: {
    ...globalStyle.textAlignCenter
  }
});

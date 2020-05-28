import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { colors } from "#styles";

const renderButtons = (props, options, key) => (
  <TouchableOpacity key={key} onPress={options.pressMethod}>
    <Text style={{ ...style.label, ...props.labelStyle }}>{options.label}</Text>
  </TouchableOpacity>
);

const BottomButtonBar = ({ style: buttonStyle, options, ...props }) => {
  return (
    <View style={{ ...buttonStyle.bottomButtonBar, ...style }}>
      {options.map(renderButtons.bind(null, props))}
    </View>
  );
};

const style = StyleSheet.create({
  bottomButtonBar: {
    backgroundColor: colors.layoutBackground,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  label: {
    fontSize: 15,
    fontWeight: "bold"
  }
});

export default BottomButtonBar;

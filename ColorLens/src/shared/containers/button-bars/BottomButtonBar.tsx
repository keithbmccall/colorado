import React from 'react'
import {TouchableOpacity, View, Text, StyleSheet} from "react-native";
import {colors} from "shared/constants";

type ButtonBarOptions = {
    label: string,
    pressMethod: any
}
type Props = {
    style?: object,
    labelStyle?: object,
    options: Array<ButtonBarOptions>
}
const renderButtons = (props: Props, options: ButtonBarOptions, key: number) => (
    <TouchableOpacity key={key} onPress={options.pressMethod}>
        <Text style={{...style.label, ...props.labelStyle}}>{options.label}</Text>
    </TouchableOpacity>
)
const BottomButtonBar = (props: Props) => {
    return (
        <View style={{...style.bottomButtonBar, ...props.style}}>
            {props.options.map(renderButtons.bind(null, props))}
        </View>
    )
}

const style = StyleSheet.create({
    bottomButtonBar: {
        backgroundColor: colors.layoutBackground,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    label: {
        fontSize: 15,
        fontWeight: "bold",
        fontStyle: "italic",
        color: colors.buttonLabel
    }
});

export type ButtonBarOptionType = ButtonBarOptions
export default BottomButtonBar;


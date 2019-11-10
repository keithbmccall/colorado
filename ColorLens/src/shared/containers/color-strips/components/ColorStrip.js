import React from "react";
import {View, TouchableOpacity} from "react-native";
import style from "../styles";

type Swatch = {
    color: string
}
type Props = {
    style?: object,
    pressMethod?: any,
    longPressMethod?: any,
    swatches: Array<Swatch>
}

const renderSwatchContent = (swatch: Swatch, key: number) => (
    <View
        style={[style.flex1, {backgroundColor: swatch.color}]}
        key={key}
    />
);
const renderSwatches = (props: Props) => {
    const {pressMethod,longPressMethod} = props
    if (pressMethod || longPressMethod) {
        return props.swatches.map((swatch, key) => (
            <TouchableOpacity
                style={style.flex1}
                onPress={pressMethod && pressMethod.bind(null, swatch, key)}
                onLongPress={longPressMethod && longPressMethod.bind(null, swatch, key)}
                key={key}
            >
                {renderSwatchContent(swatch, key)}
            </TouchableOpacity>
        ));
    }
    return props.swatches.map((swatch, key) => renderSwatchContent(swatch, key));
};

const ColorStrip = (props: Props) => (
    <View style={props.style}>{renderSwatches(props)}</View>
);

ColorStrip.defaultProps = {
    style: style.colorStripWrapper
};

export default ColorStrip;

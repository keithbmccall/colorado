import React from "react";
import PropTypes from "prop-types";
import {TouchableOpacity, View, Text} from "react-native";

const FullWidthButton = props => {

    return (
        <TouchableOpacity onPress={props.pressMethod}
                          style={{...props.style, justifyContent: 'center', alignItems: 'center', flex: 1}}>

            {props.innerText && <Text style={{...props.textStyle}}>{props.innerText}</Text>}


        </TouchableOpacity>
    )
};
FullWidthButton.defaultProps = {
    style: {flex: 1}
}
FullWidthButton.propTypes = {
    pressMethod: PropTypes.func.isRequired,
    style: PropTypes.object,
    innerText: PropTypes.string,
    textStyle: PropTypes.object
};
export default FullWidthButton;

import React from "react";
import {View, StyleSheet} from "react-native";
import Spinner from 'react-native-spinkit'
import {colors} from 'shared/constants'
//
type Props = {
    style?: object,
    blank?: boolean
}
const LoadingView = (props: Props) => props.blank ? (
    <View style={{...props.style}}/>
) : (
    <View
        style={{
            ...style.loadingView,
            ...props.style
        }}
    >
        <Spinner
            isVisible={true}
            color={colors.loadingAnimation}
            size={75}
            type="9CubeGrid"
        />
    </View>
)
LoadingView.defaultProps = {
    blank: true
}

export default LoadingView;
const style = StyleSheet.create({
    loadingView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        zIndex: 10
    }
})
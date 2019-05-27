import React, {ReactNode} from "react";
import {SafeAreaView} from "react-navigation";
import {StyleSheet} from "react-native";
import {colors} from 'shared/constants'
//
type Props = {
    children: ReactNode,
    style?: object
}
const Layout = (props: Props) => {
    return <SafeAreaView style={{...style.layoutWrapper}}>{props.children}</SafeAreaView>;
};

const style = StyleSheet.create({
    layoutWrapper: {
        flex: 1,
        backgroundColor: colors.layoutBackground,
    }
});

export default Layout;

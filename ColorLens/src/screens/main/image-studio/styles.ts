import {StyleSheet, Dimensions} from "react-native";
//
const {height} = Dimensions.get("window");
export default StyleSheet.create({
    imageStudioWrapper: {
        // top: -height * 0.4,
        // height: height * 1.4
    },
    studioGalleryWrapper: {
        height: height / 2,
        width: "100%"
    },
    imageContentWrapper: {
        backgroundColor: "#ddd",
        borderWidth: 5,
        borderColor: "#fff"
    },
    focusedImageWrapper: {
        backgroundColor: "transparent",
        height: height / 2,
        position: 'relative',
        flex: 1
    },
});

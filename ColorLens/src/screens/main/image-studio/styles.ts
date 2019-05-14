import {StyleSheet, Dimensions} from "react-native";
//
const {height} = Dimensions.get("window");
export default StyleSheet.create({
    imageStudioWrapper: {
        // top: -height * 0.4,
        // height: height * 1.4
    },
    studioGalleryWrapper: {
        flex: 5
    },
    imageContentWrapper: {
        backgroundColor: "#ddd",
        borderWidth: 5,
        borderColor: "#fff"
    },
    focusedImageWrapper: {
        backgroundColor: "transparent",
        flex: 6,
        position: 'relative'
    },
    buttonBarWrapper: {
        flex: 1
    }
});

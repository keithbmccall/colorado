import React from "react";
import PropTypes from "prop-types";
import {TouchableOpacity, StyleSheet} from "react-native";
import {ScrollableList, ResponsiveImage} from "shared/tools";
import {colors} from "shared/constants";

type Image = {
    isSelected?: boolean,
    uri: string
}
type Props = {
    images: Array<Image>,
    pressMethod(arg1:Image): any,
    galleryOptions?: {
        rowSize: number,
        rowHeight: number
    }
}

const imageCard = (renderProps: any, image: Image, key: number) => {
    const imageCardStyle = image.isSelected ? style.selectedImageWrapper : style.imageWrapper;
    return (
        <TouchableOpacity
            key={key}
            style={{...imageCardStyle, ...renderProps.cellSize}}
            onPress={() => renderProps.pressMethod(image)}
        >
            <ResponsiveImage src={image.uri}/>
        </TouchableOpacity>
    );
};

const renderImages = (props: Props) => {
    const {pressMethod, galleryOptions} = props;
    // @ts-ignore
    const cellSize = {width: `${100 / galleryOptions.rowSize}%`, height: galleryOptions.rowHeight};
    return props.images.map(imageCard.bind(null, {cellSize, pressMethod}));
};

const renderContent = (props: Props) => (props.images.length ? renderImages(props) : []);

const ImageGallery = (props: Props) => {
    props.galleryOptions && rowSizeRange(props.galleryOptions.rowSize)

    return (
        // @ts-ignore
        <ScrollableList isLazy={true} columns={props.galleryOptions.rowSize}>
            {renderContent(props)}
        </ScrollableList>
    )
}

ImageGallery.defaultProps = {galleryOptions: {rowSize: 2}};

const rowSizeRange = (rowSize: number) => {
    if (rowSize === 2 || rowSize === 3 || rowSize === 4) {
        return;
    }
    return new Error(
        `Invalid prop '${rowSize}' supplied to StudioGallery. Expected a Number of value '2' or '3' but received: ${
            rowSize
            }`
    );
};

export default ImageGallery;

const style = StyleSheet.create({
    imageWrapper: {
        backgroundColor: "#ddd",
        borderWidth: 5,
        borderColor: "#fff"
    },
    selectedImageWrapper: {
        backgroundColor: "#ddd",
        borderWidth: 5,
        borderColor: colors.selectedBorder
    }
});

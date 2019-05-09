import React from "react";
import {ImageWithColorStrip} from "shared/containers";
import {ScrollableList} from "shared/tools";
import style from "../styles";

type Image = {
    uri: string
}
type Props = {
    images: Array<Image>,
    setFocusedImage(): any,
    galleryOptions?: {
        rowSize: number,
        rowHeight: number
    }
}

const imageCard = (renderPhotoProps: any, image: Image, key: number) => (
    <ImageWithColorStrip
        image={image}
        pressMethod={renderPhotoProps.setFocusedImage.bind(null, image)}
        style={[style.imageContentWrapper, renderPhotoProps.cellSize]}
        key={key}
    />
);

const renderImages = (props: Props) => {
    const {setFocusedImage, galleryOptions} = props;
    // @ts-ignore
    const cellSize = {width: `${100 / galleryOptions.rowSize}%`, height: galleryOptions.rowHeight};
    return props.images.map(imageCard.bind(null, {cellSize, setFocusedImage}));
};

const renderContent = (props: Props) => (props.images && props.images.length ? renderImages(props) : []);


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


const StudioGallery = (props: Props) => {
    props.galleryOptions && rowSizeRange(props.galleryOptions.rowSize)

    return (
        // @ts-ignore
        <ScrollableList isLazy={true} columns={props.galleryOptions.rowSize}>
            {renderContent(props).reverse()}
        </ScrollableList>
    )
};
StudioGallery.defaultProps = {galleryOptions: {rowSize: 2}};
export default StudioGallery;

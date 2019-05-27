import React, {PureComponent} from "react";
import {Text, View} from "react-native";
import {ImageWithColorStrip} from "shared/containers";
import {ScrollableList} from "shared/tools";
import {CommonImageType} from "types-store";
import style from "../styles";


type Images = Array<CommonImageType>
type Props = {
    images: Images,
    setFocusedImage(image: CommonImageType): any,
    galleryOptions: {
        rowSize: number,
        rowHeight: number
    }
}

class StudioGallery extends PureComponent<Props> {
    static defaultProps = {
        galleryOptions: {
            rowSize: 2
        }
    }

    imageCard = (renderPhotoProps: any, image: CommonImageType, key: number) => (
        <ImageWithColorStrip
            image={image}
            pressMethod={renderPhotoProps.setFocusedImage.bind(null, image)}
            style={[style.imageContentWrapper, renderPhotoProps.cellSize]}
            key={key}
        />
    );

    renderImages = (props: Props) => {
        const {setFocusedImage, galleryOptions} = props;
        const cellSize = {width: `${100 / galleryOptions.rowSize}%`, height: galleryOptions.rowHeight};
        return props.images.map(this.imageCard.bind(null, {cellSize, setFocusedImage}));
    };

    renderContent = (props: Props) => (props.images && props.images.length ? this.renderImages(props) : []);

    rowSizeRange = (rowSize: number) => {
        if (rowSize === 2 || rowSize === 3 || rowSize === 4) {
            return;
        }
        return new Error(
            `Invalid prop '${rowSize}' supplied to StudioGallery. Expected a Number of value '2' or '3' but received: ${
                rowSize
                }`
        );
    };


    render() {
        this.props.galleryOptions && this.rowSizeRange(this.props.galleryOptions.rowSize)

        return (
            <View style={style.studioGalleryWrapper}>
                <ScrollableList isLazy={true} columns={this.props.galleryOptions.rowSize}>
                    {this.renderContent(this.props).reverse()}
                </ScrollableList>
            </View>
        )
    }
}

export default StudioGallery;

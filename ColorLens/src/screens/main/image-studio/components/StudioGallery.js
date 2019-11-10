import React, { PureComponent } from "react";
import { View } from "react-native";
import { ImageWithColorStrip } from "shared/containers";
import { ScrollableList } from "shared/tools";
import style from "../styles";

class StudioGallery extends PureComponent {
  static defaultProps = {
    galleryOptions: {
      rowSize: 2
    }
  };

  imageCard = (renderPhotoProps, image) => (
    <ImageWithColorStrip
      image={image}
      pressMethod={renderPhotoProps.setFocusedImage.bind(null, image)}
      style={[style.imageContentWrapper, renderPhotoProps.cellSize]}
      key={image.id}
    />
  );

  renderImages = props => {
    const { setFocusedImage, galleryOptions } = props;
    const cellSize = {
      width: `${100 / galleryOptions.rowSize}%`,
      height: galleryOptions.rowHeight
    };
    return props.images.map(this.imageCard.bind(null, { cellSize, setFocusedImage }));
  };

  renderContent = props => (props.images && props.images.length ? this.renderImages(props) : []);

  rowSizeRange = rowSize => {
    if (rowSize === 2 || rowSize === 3 || rowSize === 4) {
      return;
    }
    return new Error(
      `Invalid prop '${rowSize}' supplied to StudioGallery. Expected a Number of value '2' or '3' but received: ${rowSize}`
    );
  };

  render() {
    if (this.props.galleryOptions) {
      this.rowSizeRange(this.props.galleryOptions.rowSize);
    }

    return (
      <View style={style.studioGalleryWrapper}>
        <ScrollableList isLazy columns={this.props.galleryOptions.rowSize}>
          {this.renderContent(this.props).reverse()}
        </ScrollableList>
      </View>
    );
  }
}

export default StudioGallery;

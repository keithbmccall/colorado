import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";
import ResponsiveImage from "../image-containers/ResponsiveImage";
import ScrollableList from "../lists/ScrollableList";
import style from "./styles";
import ConditionalWrapper from "../tools/ConditionalWrapper";
import { conditionalListReverse } from "#utils";
import { ImageWithColorStrip } from "#containers";

class ImageGallery extends PureComponent {
  static defaultProps = {
    galleryOptions: {
      rowSize: 2
    }
  };

  renderContent = () => {
    const {
      images,
      pressMethod,
      galleryOptions: { rowSize, rowHeight },
      isStudio
    } = this.props;
    const cellSize = {
      width: `${100 / rowSize}%`,
      height: rowHeight
    };

    return images.map(image => {
      const imageCardStyle = image.isSelected ? style.selectedImageWrapper : style.imageWrapper;

      return isStudio ? (
        <ImageWithColorStrip
          image={image}
          pressMethod={() => pressMethod(image)}
          style={[style.imageWrapper, cellSize]}
          key={image.key}
        />
      ) : (
        <TouchableOpacity
          key={image.key}
          style={{ ...imageCardStyle, cellSize }}
          onPress={() => pressMethod(image)}
        >
          <ResponsiveImage src={image} />
        </TouchableOpacity>
      );
    });
  };

  render() {
    const {
      galleryOptions: { rowSize },
      isStudio
    } = this.props;

    this.rowSizeRange(rowSize);

    return (
      <ConditionalWrapper enable={isStudio} style={style.studioGalleryWrapper}>
        <ScrollableList isLazy columns={rowSize}>
          {conditionalListReverse({
            list: this.renderContent(),
            test: isStudio
          })}
        </ScrollableList>
      </ConditionalWrapper>
    );
  }

  rowSizeRange = rowSize => {
    if (rowSize === 2 || rowSize === 3 || rowSize === 4) {
      return;
    }
    return new Error(
      `Invalid prop '${rowSize}' supplied to StudioGallery. Expected a Number of value '2' or '3' but received: ${rowSize}`
    );
  };
}

export default ImageGallery;

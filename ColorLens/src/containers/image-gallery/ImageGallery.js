import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";
import ResponsiveImage from "../image-containers/ResponsiveImage";
import ScrollableList from "../lists/ScrollableList";
import style from "./styles";
import ConditionalWrapper from "../tools/ConditionalWrapper";
import { conditionalListReverse, rowSizeRange } from "#utils";
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
          key={image.id}
        />
      ) : (
        <TouchableOpacity
          key={image.id}
          style={{ ...imageCardStyle, ...cellSize }}
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

    rowSizeRange(rowSize);

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
}

export default ImageGallery;

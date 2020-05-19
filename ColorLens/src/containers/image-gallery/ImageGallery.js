import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";
import ResponsiveImage from "../image-containers/ResponsiveImage";
import ScrollableList from "../lists/ScrollableList";
import style from "./styles";
import ConditionalWrapper from "../tools/ConditionalWrapper";
import { conditionalListReverse, rowSizeRangeValidator } from "#utils";
import { ImageWithColorStrip } from "#containers";

class ImageGallery extends PureComponent {
  static defaultProps = {
    galleryOptions: {
      rowSize: 2
    }
  };

  renderStudioGallery = () => {
    const {
      images,
      onPress,
      galleryOptions: { rowSize, rowHeight }
    } = this.props;
    const cellSize = {
      width: `${100 / rowSize}%`,
      height: rowHeight
    };
    return images.map((image, key) => {
      return (
        <TouchableOpacity
          key={key}
          style={{ ...style.imageWrapper, ...cellSize }}
          onPress={() => onPress(image)}
        >
          <ImageWithColorStrip image={image} />
        </TouchableOpacity>
      );
    });
  };

  renderImageGallery = () => {
    const {
      images,
      onPress,
      galleryOptions: { rowSize, rowHeight }
    } = this.props;
    const cellSize = {
      width: `${100 / rowSize}%`,
      height: rowHeight
    };

    return images.map((image, key) => {
      const imageCardStyle = image.isSelected ? style.selectedImageWrapper : style.imageWrapper;

      return (
        <TouchableOpacity
          key={key}
          style={{ ...imageCardStyle, ...cellSize }}
          onPress={() => onPress(image)}
        >
          <ResponsiveImage src={image} />
        </TouchableOpacity>
      );
    });
  };

  renderContent = () => {
    const { isStudio } = this.props;

    const imageList = isStudio ? this.renderStudioGallery() : this.renderImageGallery();

    return conditionalListReverse({
      list: imageList,
      test: isStudio
    });
  };

  validation = () => {
    rowSizeRangeValidator(this.props.galleryOptions.rowSize);
  };

  render() {
    const {
      galleryOptions: { rowSize },
      isStudio
    } = this.props;

    return (
      <ConditionalWrapper enable={isStudio} style={style.studioGalleryWrapper}>
        <ScrollableList isLazy columns={rowSize}>
          {this.renderContent()}
        </ScrollableList>
      </ConditionalWrapper>
    );
  }

  componentDidMount() {
    this.validation();
  }

  componentDidUpdate() {
    this.validation();
  }
}

export default ImageGallery;

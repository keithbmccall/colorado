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

    const imageList = images.map(image => {
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

import React, { Fragment, useState, useEffect } from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";
import LoadingView from "#containers/loading/LoadingView";
import { isValidNumberOrPercentageValidator } from "#utils/validators.util";
import { globalStyle } from "#styles";

const ResponsiveImage = props => {
  const {
    style,
    resizeMode,
    src: { uri },
    onReady
  } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (style) {
      isValidNumberOrPercentageValidator(style.width);
      isValidNumberOrPercentageValidator(style.height);
    }
  }, [style]);

  const imageIsLoaded = () => {
    if (onReady) {
      onReady();
    }
    setIsLoaded(true);
  };

  return (
    <Fragment>
      <Image
        source={{ uri, cache: "force-cache" }}
        style={style}
        onLoad={imageIsLoaded}
        resizeMode={resizeMode}
      />
      {!isLoaded && <LoadingView />}
    </Fragment>
  );
};

ResponsiveImage.propTypes = {
  resizeMode: PropTypes.string,
  style: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  }),
  src: PropTypes.shape({ uri: PropTypes.string.isRequired }).isRequired,
  onReady: PropTypes.func
};

ResponsiveImage.defaultProps = {
  resizeMode: "cover",
  style: globalStyle.wh100,
  onReady: null
};

export default ResponsiveImage;

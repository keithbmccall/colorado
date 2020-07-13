import { getPixel, getPalette } from "react-native-color-lens";

/**
 *
 * @param e
 * @param uri
 * @param imageDimensions
 * @param cb
 * @param err
 * @return {Promise<void>}
 */
const _getPixel = async ({ e, uri, imageDimensions }, cb, err) => {
  const { locationX: x, locationY: y } = e.nativeEvent;

  const getHexOptions = {
    x,
    y,
    ...imageDimensions
  };

  try {
    const _color = await getPixel(uri, getHexOptions);
    cb(_color);
  } catch (error) {
    console.log("error in chooserscreen.findcolor", error);
    err(error);
  }
};

export { _getPixel, getPalette };

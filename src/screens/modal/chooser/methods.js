import PixelColor from "react-native-pixel-color";

/**
 *
 * @param e
 * @param uri
 * @param imageDimensions
 * @param cb
 * @param err
 * @return {Promise<void>}
 */
export const findColor = async ({ e, uri, imageDimensions }, cb, err) => {
  const { locationX: x, locationY: y } = e.nativeEvent;

  const getHexOptions = {
    x,
    y,
    ...imageDimensions
  };

  try {
    const _color = await PixelColor.getHex(uri, getHexOptions);
    cb(_color);
  } catch (error) {
    console.log("error in chooserscreen.findcolor", error);
    err(error);
  }
};

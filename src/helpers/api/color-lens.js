import {
  getPixel as colorLensGetPixel,
  getPalette,
  getPantone,
  getHexFromRGB
} from "react-native-color-lens";

/**
 *
 * @param e
 * @param uri
 * @param imageDimensions
 * @param cb
 * @param err
 * @return {Promise<void>}
 */
const getPixel = async ({ e, uri, imageDimensions }, cb, err) => {
  const { locationX: x, locationY: y } = e.nativeEvent;

  const options = {
    x,
    y,
    ...imageDimensions
  };

  try {
    const hex = await colorLensGetPixel(uri, options);
    cb(hex);
  } catch (error) {
    console.log("error in chooserscreen.findcolor", error);
    err(error);
  }
};

export { getPixel, getPalette, getPantone, getHexFromRGB };

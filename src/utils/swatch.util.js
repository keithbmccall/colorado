import rgb2hex from "rgb2hex";
import { swatchDictionaryEnum } from "#enum";
import colorHelper from "color-to-name";
import pantone from "nearest-pantone";

/**
 *
 * @param swatches
 * @returns {[string]}
 */
export const equalizeSwatchLength = swatches => {
  if (swatches.length < 6) {
    const n = 6 - swatches.length;
    for (let i = 0; i < n; i++) {
      swatches.push(swatches[i]);
    }
  }
  return swatches.slice(0, 6);
};

/**
 *
 * @param red
 * @param green
 * @param blue
 * @returns {{alpha: number, hex: String}|{alpha: number, hex: string}}
 */
export const convertRGBToHex = ({ red, green, blue }) => rgb2hex(`rgb(${red},${green},${blue})`);

/**
 *
 * @param swatches
 * @returns {object}
 */
export const normalizeSwatches = swatches =>
  equalizeSwatchLength(swatches).reduce((acc, { r: red, g: green, b: blue }, i) => {
    // should return { a: "#000000", b: "#000000" } etc...
    const { hex = null } = convertRGBToHex({ red, green, blue });
    const key = swatchDictionaryEnum[`${i}`];

    if (hex) {
      acc[key] = hex;
      return acc;
    }

    console.log(`Error in normalizeSwatches. Hex returned null at key: ${i}`);

    acc[key] = "#000000";
    return acc;
  }, {});

/**
 *
 * @param swatches
 * @returns {*[]}
 */
export const mapSwatchPaletteToArray = swatches => {
  return Object.keys(swatches).map(swatchKey => swatches[swatchKey]);
};

/**
 *
 * @param hex
 * @returns {{name: string, pantone: string, rgb: string}}
 */
export const getHexInfo = hex => {
  const { name, pantone: _pantone } = pantone.getClosestColor(hex);
  const { r, g, b } = colorHelper.hexToRGB(hex);
  return {
    name: name.toUpperCase(),
    pantone: `PANTONE® ${_pantone}`,
    rgb: `R: ${r} G: ${g} B: ${b}`
  };
};

import { swatchDictionaryEnum } from "#enum/swatch-dictionary.enum";
import API from "#helpers/api";
import { fallbackSwatch } from "#enum/colors.enum";

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
 * @param swatches
 * @returns {object}
 */
export const normalizeSwatches = swatches =>
  equalizeSwatchLength(swatches).reduce((acc, { r: red, g: green, b: blue }, i) => {
    // should return { a: "#000000", b: "#000000" } etc...
    const hex = API.getHexFromRGB({ red, green, blue }) || null;
    const key = swatchDictionaryEnum[`${i}`];

    if (hex) {
      acc[key] = {
        hex,
        ...getHexInfo(hex)
      };

      return acc;
    }

    console.log(`Error in normalizeSwatches. Hex returned null at key: ${i}`);

    acc[key] = {
      hex: fallbackSwatch.hex,
      ...getHexInfo(fallbackSwatch.hex)
    };
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
  const {
    name,
    pantone: _pantone,
    rgb: { R, G, B }
  } = API.getPantone(hex);
  console.log("name", { name });
  return {
    name: name.toUpperCase(),
    pantone: `PANTONE® ${_pantone}`,
    rgb: `R: ${R} G: ${G} B: ${B}`
  };
};

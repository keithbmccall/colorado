import rgb2hex from "rgb2hex";
import { swatchDictionaryEnum } from "#enum";

export const equalizeSwatchLength = swatches => {
  if (swatches.length < 6) {
    const n = 6 - swatches.length;
    for (let i = 0; i < n; i++) {
      swatches.push(swatches[i]);
    }
  }
  return swatches.slice(0, 6);
};

export const converRGBToHex = ({ red, green, blue }) => rgb2hex(`rgb(${red},${green},${blue})`);

export const buildSwatchPalette = (acc, { r: red, g: green, b: blue }, i) => {
  // should return { a: "#000000", b: "#000000" } etc...
  const { hex = null } = converRGBToHex({ red, green, blue });
  const key = swatchDictionaryEnum[`${i}`];

  if (hex) {
    acc[key] = hex;
    return acc;
  }

  console.log(`Error in normalizeSwatches. Hex returned null at key: ${i}`);

  acc[key] = "#000000";
  return acc;
};

export const normalizeSwatches = swatches =>
  equalizeSwatchLength(swatches).reduce(buildSwatchPalette, {});

export const mapSwatchPaletteToArray = swatches => {
  return Object.keys(swatches).map(swatchKey => swatches[swatchKey]);
};

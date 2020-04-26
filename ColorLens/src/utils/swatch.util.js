import rgb2hex from "rgb2hex";

export const equalizeSwatchLength = swatches => {
  if (swatches.length < 6) {
    const n = 6 - swatches.length;
    for (let i = 0; i < n; i++) {
      swatches.push(swatches[i]);
    }
  }
  return swatches.slice(0, 6);
};

export const normalizeSwatches = swatches =>
  equalizeSwatchLength(swatches)
    // .reverse()
    .map(swatch => {
      const { r: red, g: green, b: blue } = swatch;
      const { hex = null } = rgb2hex(`rgb(${red},${green},${blue})`);
      if (hex) {
        return hex;
      }
      console.log("ERROR in normalizeswatches. hex returned null");
    });

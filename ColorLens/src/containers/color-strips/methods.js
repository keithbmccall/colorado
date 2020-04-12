import rgb2hex from "rgb2hex";

const equalizeSwatchLength = swatches => {
  if (swatches.length < 6) {
    const n = 6 - swatches.length;
    for (let i = 0; i < n; i++) {
      swatches.push(swatches[i]);
    }
  }
  return swatches;
};

const normalizeSwatches = swatches =>
  equalizeSwatchLength(swatches)
    .sort((a, b) => b.population - a.population)
    .slice(0, 6)
    .map(swatch => (swatch.color = rgb2hex(swatch.color).hex) && swatch);

export { normalizeSwatches };

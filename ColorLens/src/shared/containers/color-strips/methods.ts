import rgb2hex from "rgb2hex";

// buildSwatchObj
type Swatch = {
    color: string,
    population: number
}
type Swatches = Array<Swatch>

const equalizeSwatchLength = (swatches: Swatches) => {
    if (swatches.length < 6) {
        let n = 6 - swatches.length;
        for (let i = 0; i < n; i++) {
            swatches.push(swatches[i]);
        }
    }
    return swatches;
};
const normalizeSwatches = (swatches: Swatches) =>
    equalizeSwatchLength(swatches)
        .sort((a, b) => b.population - a.population)
        .slice(0, 6)
        .map((swatch) => (swatch.color = rgb2hex(swatch.color).hex) && swatch);


export {normalizeSwatches};

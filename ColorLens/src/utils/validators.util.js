export const rowSizeRange = rowSize => {
  // ImageGallery.js
  if (rowSize === 2 || rowSize === 3 || rowSize === 4) {
    return;
  }
  return new Error(
    `Invalid prop '${rowSize}' supplied to StudioGallery. Expected a Number of value '2' or '3' but received: ${rowSize}`
  );
};

export const isValidNumberOrPercentage = style => {
  // ResponsiveImage.js
  if (typeof style === "number") {
    return;
  } else if (style[style.length - 1] === "%") {
    return;
  }
  return new Error(
    `Invalid prop '${style}' supplied to ResponsiveImage. Expected a Number or Stringed number as a percentage but received: ${style}`
  );
};

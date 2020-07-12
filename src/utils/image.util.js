import { DEVICE_WIDTH } from "../styles-global";

/**
 *
 * @param imageDimensions - object with height & width keys
 * @param containerWidth - width of the container
 * @return {number}
 */
export const getImageHeightOnContain = (imageDimensions, containerWidth = DEVICE_WIDTH) => {
  return (imageDimensions.height * containerWidth) / imageDimensions.width;
};

import CameraRoll from "@react-native-community/cameraroll";
import { defaultCameraRollOptionsEnum } from "#enum/camera-roll.enum";
import { keyGenerator } from "#utils/general.util";

export const buildImageObject = (edge, i) => {
  const {
    node: { image, location, timestamp }
  } = edge;

  return {
    ...image,
    location,
    timestamp,
    id: keyGenerator(timestamp, i),
    isSelected: false
  };
};

export const getCameraRollImages = async (options = defaultCameraRollOptionsEnum) => {
  const { edges: imageEdges, page_info } = (await CameraRoll.getPhotos(options)) || [];

  return {
    pageInfo: page_info,
    images: imageEdges.map(buildImageObject)
  };
};

import CameraRoll from "@react-native-community/cameraroll";
import { defaultCameraRollOptionsEnum } from "#enum";

export const buildImageObject = (edge, i) => {
  const {
    node: { image, location, timestamp }
  } = edge;

  return {
    ...image,
    location,
    timestamp,
    id: `${timestamp}_${i}`,
    isSelected: false
  };
};

export const getCameraRollImages = async (options = defaultCameraRollOptionsEnum) => {
  const images = (await CameraRoll.getPhotos(options)) || [];
  const { edges: imageEdges, page_info } = images;

  return {
    pageInfo: page_info,
    images: imageEdges.map(buildImageObject)
  };
};

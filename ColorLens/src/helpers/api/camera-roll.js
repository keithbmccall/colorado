import CameraRoll from "@react-native-community/cameraroll";

export const buildImageObject = (edge, i) => {
  const {
    node: { image, location, timestamp }
  } = edge;

  return {
    ...image,
    location,
    timestamp,
    key: i,
    isSelected: false
  };
};

const defaultCameraRollOptions = {
  first: 5000,
  assetType: "Photos"
};

export const getCameraRollImages = async (options = defaultCameraRollOptions) => {
  const images = (await CameraRoll.getPhotos(options)) || [];
  const { edges: imageEdges, page_info } = images;

  return {
    pageInfo: page_info,
    images: imageEdges.map(buildImageObject)
  };
};

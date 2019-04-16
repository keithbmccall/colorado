import { AsyncStorage } from "react-native";

const studio = "studio";
export const saveStudioImages = images => {
  console.log(`saving ${images.length} images!`);
  console.log("json", JSON.stringify([images]));
  AsyncStorage.setItem(studio, JSON.stringify([images]));
};

export const getStudioImages = async () => {
  const images = await AsyncStorage.getItem(studio, error => error && console.log("error getting studio images"));
  return JSON.parse(images);
};

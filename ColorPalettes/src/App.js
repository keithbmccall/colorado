import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  CameraRoll,
  Modal,
  ImagePickerIOS,
  AsyncStorage
} from "react-native";
import { getAllSwatches } from "react-native-palette";
import rgbHex from "rgb-hex";
import PixelColor from "react-native-pixel-color";
//
import { Router } from "./Router";

//
console.disableYellowBox = true;

export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      cameraRollImages: [],
      cameraRollLoaded: false,
      cameraRollModalOpen: false,
      //
      swatchesLoaded: false,
      //inspect state
      currentImage: "",
      currentImageMounted: false,
      inspectModalOpen: false,
      color1: { color: "transparent", border: "transparent" },
      color2: { color: "transparent", border: "transparent" },
      color3: { color: "transparent", border: "transparent" },
      color4: { color: "transparent", border: "transparent" },
      color5: { color: "transparent", border: "transparent" },
      color6: { color: "transparent", border: "transparent" },
      imageHeight: "",
      imageWidth: "",
      //
      palettes: [],
      palettesLoaded: false,
      libraryModalOpen: false,
      currentPalette: {},
      currentPaletteMounted: false
    };
  }

  //palette library
  resetCurrentPalette = () => {
    this.setState({
      currentPalette: {},
      libraryModalOpen: !this.state.libraryModalOpen,
      currentPaletteMounted: !this.state.currentPaletteMounted
    });
  };
  toggleLibraryModal = palette => {
    this.setState({
      libraryModalOpen: !this.state.libraryModalOpen,
      currentPalette: palette,
      currentPaletteMounted: !this.state.currentPaletteMounted
    });
  };
  getPalette = () => {
    AsyncStorage.getAllKeys().then(res => {
      console.log(res);
      AsyncStorage.multiGet(res).then(response => {
        const data = response.reduce((arr, index) => {
          arr.push({ name: index[0], swatches: JSON.parse(index[1]) });
          console.log("arr", arr);
          return arr;
        }, []);
        this.setState({
          palettes: data,
          palettesLoaded: true
        });
      });
    });
  };
  savePalette = data => {
    console.log("save", data);
    AsyncStorage.setItem(
      data.paletteName,
      JSON.stringify([
        this.state.color1.color,
        this.state.color2.color,
        this.state.color3.color,
        this.state.color4.color,
        this.state.color5.color,
        this.state.color6.color
      ])
    ).then(res => console.log("saved", res));
  };
  //
  // camera roll
  getCameraImage = () => {
    CameraRoll.getPhotos({
      first: 1
    })
      .then(r => {
        console.log("1 IMAGE", r.edges);
        this.getDominantSwatches(r.edges[0], 1);
      })
      .catch(err => {
        console.log("error in getCameraImage", err);
      });
  };

  getCameraRoll = () => {
    ImagePickerIOS.openSelectDialog(
      {},
      imageUri => {
        let dummy = {};
        dummy.uri = imageUri;
        this.toggleInspectModal();
        this.setCurrentImage(dummy);
        this.getDominantSwatches(dummy);
      },
      error => console.log(error)
    );
  };
  toggleCameraRollModal = () => {
    this.setState({
      cameraRollModalOpen: !this.state.cameraRollModalOpen
    });
  };
  setCurrentImage = image => {
    this.setState({
      currentImage: image,
      currentImageMounted: true
    });
  };
  toggleInspectModal = () => {
    this.setState({
      inspectModalOpen: !this.state.inspectModalOpen
    });
  };
  //
  //get dominant swatches
  resetSwatches = () => {
    this.setState({
      swatchesLoaded: false
    });
  };
  convertSwatches = swatch => {
    return (hex = "#" + rgbHex(swatch.color).substring(0, 6));
  };
  setDominantSwatches = swatches => {
    for (let i = 0; i < 6; i++) {
      this.setState({
        [`color${i + 1}`]: {
          color: swatches[i],
          border: swatches[i]
        },
        swatchesLoaded: true
      });
    }
  };
  setSwatches = swatches => {
    if (swatches) {
      console.log("swatches length", swatches.length);
      if (swatches.length > 6) {
        console.log("watttt", swatches.slice(0, 6));
        this.setDominantSwatches(swatches.slice(0, 6));
      } else {
        for (let i = 0; i < 6; i++) {
          swatches.push(swatches[0]);
        }
        this.setDominantSwatches(swatches.slice(0, 6));
      }
    }
  };
  getDominantSwatches = image => {
    console.log("getSwatches", image);
    const path = image.uri;
    getAllSwatches({ quality: "high" }, path, (error, swatches) => {
      if (error) {
        console.log("error in PhotosPage.getSwatches", error);
      } else {
        swatches.sort((a, b) => {
          return b.population - a.population;
        });
      }
      console.log("swatches", swatches);
      const convertedSwatches = swatches.map(this.convertSwatches);
      this.setSwatches(convertedSwatches);
    });
  };
  // inspect methods
  onCurrentImageLayout = ({ nativeEvent }) => {
    this.setState({
      imageWidth: nativeEvent.layout.width,
      imageHeight: nativeEvent.layout.height
    });
  };
  resetSetColor = color => {
    let colorToReset = Object.keys(this.state).find(
      key => this.state[key].color === color
    );
    this.setState({
      [colorToReset]: { color: "transparent", border: "white" }
    });
  };
  findColor = (e, image) => {
    let { imageHeight, imageWidth } = this.state;
    let x = e.nativeEvent.locationX;
    let y = e.nativeEvent.locationY;
    PixelColor.getHex(this.state.currentImage.uri, {
      x,
      y,
      height: imageHeight,
      width: imageWidth
    })
      .then(color => {
        console.log("tis color", color);
        this.setColor(color);
      })
      .catch(err => {
        console.log("error in inspectscreen.findcolor", err);
      });
  };
  setColor = color => {
    console.log("setcolor", color);
    if (this.state.color1.color === "transparent") {
      this.setState({
        color1: { color: color, border: color }
      });
    } else if (this.state.color2.color === "transparent") {
      this.setState({
        color2: { color: color, border: color }
      });
    } else if (this.state.color3.color === "transparent") {
      this.setState({
        color3: { color: color, border: color }
      });
    } else if (this.state.color4.color === "transparent") {
      this.setState({
        color4: { color: color, border: color }
      });
    } else if (this.state.color5.color === "transparent") {
      this.setState({
        color5: { color: color, border: color }
      });
    } else if (this.state.color6.color === "transparent") {
      this.setState({
        color6: { color: color, border: color }
      });
    } else {
      console.log("color blocks are full!");
    }
  };
  componentDidMount() {
    this.getPalette();
  }
  render() {
    const screenProps = {
      getCameraRoll: this.getCameraRoll,
      cameraRollImages: this.state.cameraRollImages,
      cameraRollLoaded: this.state.cameraRollLoaded,
      //camera roll modal functionality
      cameraRollModalOpen: this.state.cameraRollModalOpen,
      toggleCameraRollModal: this.toggleCameraRollModal,
      // inspect image
      setCurrentImage: this.setCurrentImage,
      currentImage: this.state.currentImage,
      currentImageMounted: this.state.currentImageMounted,
      inspectModalOpen: this.state.inspectModalOpen,
      toggleInspectModal: this.toggleInspectModal,
      findColor: this.findColor,
      resetColor: this.resetColor,
      onCurrentImageLayout: this.onCurrentImageLayout,
      // swatches
      getDominantSwatches: this.getDominantSwatches,
      swatchesLoaded: this.state.swatchesLoaded,
      resetSwatches: this.resetSwatches,
      resetSetColor: this.resetSetColor,
      color1: this.state.color1,
      color2: this.state.color2,
      color3: this.state.color3,
      color4: this.state.color4,
      color5: this.state.color5,
      color6: this.state.color6,
      // palettes / library
      savePalette: this.savePalette,
      palettesLoaded: this.state.palettesLoaded,
      palettes: this.state.palettes,
      libraryModalOpen: this.state.libraryModalOpen,
      toggleLibraryModal: this.toggleLibraryModal,
      currentPalette: this.state.currentPalette,
      currentPaletteMounted: this.state.currentPaletteMounted,
      resetCurrentPalette: this.resetCurrentPalette
    };
    return <Router screenProps={screenProps} />;
  }
}

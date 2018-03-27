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
  Modal
} from "react-native";
import axios from "axios";
import { getAllSwatches } from "react-native-palette";
import ImagePicker from "react-native-image-picker";
import RNFetchBlob from "react-native-fetch-blob";
import rgbHex from "rgb-hex";
import ColorHelper from "color-to-name";
//
import { Router } from "./Router";
console.disableYellowBox = true;
// const SLASH_REQUESTS = "https://e2901d8b.ngrok.ioapi/colorado";
const SLASH_REQUESTS = "https://colorado-server.herokuapp.com/api/colorado";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      palettes: [],
      palettesLoaded: false,
      // from photospage
      savesOnCurrentSession: 0,
      images: [],
      imagesLoaded: false,
      previewModalOpen: false,
      saveModalOpen: false,
      currentSwatches: null,
      currentImage: "",
      swatchesLoaded: false,
      bigColor: "#aaa",
      colorText: "#aaa"
      //
    };
  }

  deletePalette = data => {
    console.log("deleting", data);
    axios({
      url: SLASH_REQUESTS,
      method: "delete",
      data: data
    })
      .then(res => {
        console.log("deleted!", res);
        this.getPalettes();
      })
      .catch(err => {
        console.log("error in delete palette", err);
      });
  };

  savePalette = data => {
    axios({
      url: SLASH_REQUESTS,
      method: "post",
      data: data
    })
      .then(res => {
        console.log("saved palettes", res);
        this.setState(
          {
            savesOnCurrentSession: this.state.savesOnCurrentSession + 1
          },
          this.getPalettes()
        );
      })
      .catch(err => {
        console.log("error in savePalette", err);
      });
  };

  getPalettes = () => {
    console.log("called", SLASH_REQUESTS);
    axios({
      url: SLASH_REQUESTS,
      method: "get"
    })
      .then(res => {
        console.log("GET", res);
        const palettesResponse = res.data.palettes.sort((a, b) => {
          return b.id - a.id;
        });

        this.setState({
          palettes: palettesResponse,
          palettesLoaded: true
        });
      })
      .catch(err => {
        console.log("error in getPalettes", err);
      });
  };
  injectColorComparison = color => {
    console.log("inject", color);
    this.setState({
      bigColor: color,
      colorText: color
    });
  };
  //from photos page
  getSwatches = image => {
    console.log("getSwatches", image);
    const path = image.node.image.uri;
    getAllSwatches({ quality: "high" }, path, (error, swatches) => {
      if (error) {
        this.setState;
        console.log("error in PhotosPage.getSwatches", error);
      } else {
        swatches.sort((a, b) => {
          return b.population - a.population;
        });
        console.log("swatches", swatches);
      }

      if (swatches) {
        console.log("swatches length", swatches.length);
        if (swatches.length > 6) {
          this.setState({
            currentSwatches: swatches,
            currentImage: path,
            swatchesLoaded: true
          });
        } else {
          for (let i = 0; i < 6; i++) {
            swatches.push(swatches[0]);
            console.log("pushing");
          }
          this.setState({
            currentSwatches: swatches,
            currentImage: path,
            swatchesLoaded: true
          });
        }
      }
    });
    this.openPreviewModal();
  };

  openPreviewModal = () => {
    this.setState({
      previewModalOpen: true
    });
  };

  getCameraImage = () => {
    CameraRoll.getPhotos({
      first: 1,
      assetType: "All"
    })
      .then(r => {
        console.log("1 IMAGE", r.edges);
        this.getSwatches(r.edges[0], 1);
      })
      .catch(err => {
        console.log("error in getCameraImage", err);
      });
  };

  getImages = () => {
    CameraRoll.getPhotos({
      first: 18,
      assetType: "All"
    })
      .then(r => {
        console.log("GETIMAGES", r.edges);
        this.setState({ images: r.edges, imagesLoaded: true });
      })
      .catch(err => {
        console.log("error in getImages", err);
      });
  };
  bigColorState = (color, text) => {
    this.setState({
      bigColor: color,
      colorText: text
    });
  };
  toggleModal = () => {
    this.setState({
      previewModalOpen: !this.state.previewModalOpen
    });
  };

  resetSwatchModal = () => {
    this.setState({
      swatchesLoaded: false
    });
  };

  resetSwatchState = () => {
    this.setState({
      currentSwatches: null,
      previewModalOpen: false,
      currentImage: "",
      swatchesLoaded: false
    });
  };

  saveModalClose = () => {
    this.setState({
      saveModalOpen: !this.state.saveModalOpen
    });
  };
  saveModalToggle = () => {
    this.setState({
      saveModalOpen: !this.state.saveModalOpen,
      previewModalOpen: !this.state.previewModalOpen
    });
  };
  //camerascreen

  componentDidMount() {
    console.log("app mounted");
    this.getPalettes();
    this.getImages();
  }
  render() {
    const screenProps = {
      //axios calls
      savePalette: this.savePalette,
      getPalettes: this.getPalettes,
      deletePalette: this.deletePalette,
      //
      palettes: this.state.palettes,
      palettesLoaded: this.state.palettesLoaded,
      getSwatches: this.getSwatches,
      images: this.state.images,
      imagesLoaded: this.state.imagesLoaded,
      previewModalOpen: this.state.previewModalOpen,
      saveModalOpen: this.state.saveModalOpen,
      currentSwatches: this.state.currentSwatches,
      currentImage: this.state.currentImage,
      swatchesLoaded: this.state.swatchesLoaded,
      getImages: this.getImages,
      resetSwatchState: this.resetSwatchState,
      resetSwatchModal: this.resetSwatchModal,
      saveModalClose: this.saveModalClose,
      saveModalToggle: this.saveModalToggle,
      toggleModal: this.toggleModal,
      getCameraImage: this.getCameraImage,
      openPreviewModal: this.openPreviewModal,
      bigColorState: this.bigColorState,
      bigColor: this.state.bigColor,
      colorText: this.state.colorText,
      injectColorComparison: this.injectColorComparison
    };
    return <Router screenProps={screenProps} />;
  }
}

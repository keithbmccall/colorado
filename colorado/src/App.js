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

const SLASH_REQUESTS = "https://dda334c9.ngrok.io/api/colorado";
// const SLASH_REQUESTS = "http://localhost:8080/api/colorado";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      palettes: [],
      palettesLoaded: false,
      // from photospage
      images: [],
      imagesLoaded: false,
      previewModalOpen: false,
      saveModalOpen: false,
      currentSwatches: null,
      currentImage: "",
      swatchesLoaded: false
      //
    };
    this.savePalette = this.savePalette.bind(this);
    this.getPalettes = this.getPalettes.bind(this);
    //
    this.getImages = this.getImages.bind(this);
    this.getSwatches = this.getSwatches.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.saveModalToggle = this.saveModalToggle.bind(this);
    this.saveModalClose = this.saveModalClose.bind(this);
    this.resetSwatchState = this.resetSwatchState.bind(this);
    this.resetSwatchModal = this.resetSwatchModal.bind(this);
    this.openPreviewModal = this.openPreviewModal.bind(this);
  }
  savePalette(data) {
    axios({
      url: SLASH_REQUESTS,
      method: "post",
      data: data
    })
      .then(res => {
        console.log("saved palettes", res);
        this.getPalettes();
      })
      .catch(err => {
        console.log(err);
      });
  }
  getPalettes() {
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
        console.log("getPalettes", err);
      });
  }
  //from photos page
  getSwatches(image) {
    console.log("getSwatches", image);
    const path = image.node.image.uri;
    getAllSwatches({ quality: "high" }, path, (error, swatches) => {
      if (error) {
        console.log("error in PhotosPage.getSwatches", error);
      } else {
        swatches.sort((a, b) => {
          return b.population - a.population;
        });
        console.log("swatches", swatches);
      }
      if (swatches) {
        this.setState({
          currentSwatches: swatches,
          currentImage: path,
          swatchesLoaded: true
        });
      }
    });
    this.openPreviewModal();
  }
  openPreviewModal() {
    this.setState({
      previewModalOpen: true
    });
  }
  getCameraImage() {
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
  }
  getImages() {
    CameraRoll.getPhotos({
      first: 200,
      assetType: "All"
    })
      .then(r => {
        console.log("GETIMAGES", r.edges);
        this.setState({ images: r.edges, imagesLoaded: true });
      })
      .catch(err => {
        console.log("error in getImages", err);
      });
  }
  toggleModal() {
    this.setState({
      previewModalOpen: !this.state.previewModalOpen
    });
  }
  resetSwatchModal() {
    this.setState({
      swatchesLoaded: false
    });
  }
  resetSwatchState() {
    this.setState({
      currentSwatches: null,
      previewModalOpen: false,
      currentImage: "",
      swatchesLoaded: false
    });
  }
  saveModalClose() {
    this.setState({
      saveModalOpen: !this.state.saveModalOpen
    });
  }
  saveModalToggle() {
    this.setState({
      saveModalOpen: !this.state.saveModalOpen,
      previewModalOpen: !this.state.previewModalOpen
    });
  }
  //camerascreen

  componentDidMount() {
    console.log("app mounted");
    this.getPalettes();
    this.getImages();
  }
  render() {
    const screenProps = {
      savePalette: this.savePalette,
      getPalettes: this.getPalettes,
      palettes: this.state.palettes,
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
      openPreviewModal: this.openPreviewModal
    };
    return <Router screenProps={screenProps} />;
  }
}

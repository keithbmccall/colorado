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
  TextInput,
  Modal,
  RefreshControl,
  StatusBar,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

//
import LibraryItems from "./library/LibraryItems";
import LibraryModal from "./library/LibraryModal";
// import InspectModal from "./InspectModal";
//
import Loading from "../../Loading";
//
import style from "../../Style";
import coloradoLogo from "../../images/colorado_logo.png";

const { width, height } = Dimensions.get("window");

export default class Library extends Component {
  renderPaletteLibrary = (palette, key) => {
    return (
      <LibraryItems
        key={key}
        palette={palette}
        toggleLibraryModal={this.props.screenProps.toggleLibraryModal}
      />
    );
  };
  render() {
    if (this.props.screenProps.palettesLoaded) {
      const palettes = this.props.screenProps.palettes.map(
        this.renderPaletteLibrary
      );
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#fff"
          }}
        >
          <StatusBar barStyle="dark-content" hidden={false} />
          <View style={[style.statusPadding, { backgroundColor: "#eee" }]} />
          <View
            style={{
              height: height / 10,
              backgroundColor: "transparent",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#eee",
              alignItems: "center",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1
            }}
          >
            <View>
              <Icon.Button
                size={40}
                name="ios-camera"
                backgroundColor="transparent"
                color="#91268d"
                onPress={() => this.props.navigation.navigate("Camera")}
                underlayColor="transparent"
              />
            </View>
            <View>
              <Image source={coloradoLogo} resizeMethod="resize" />
            </View>
            <View>
              <Icon.Button
                size={40}
                backgroundColor="transparent"
                underlayColor="transparent"
              />
            </View>
          </View>

          <ScrollView contentContainerStyle={{ backgroundColor: "#fff" }}>
            <Text
              style={[
                style.textHeader,
                {
                  marginTop: 30,
                  marginLeft: 10,
                  color: "black"
                }
              ]}
            >
              Palette Library
            </Text>
            <View
              style={{
                flex: 8,
                backgroundColor: "#fff",
                paddingBottom: 30
              }}
            >
              {palettes}
            </View>
          </ScrollView>

          <Modal
            animationType="fade"
            transparent={false}
            visible={this.props.screenProps.libraryModalOpen}
          >
            <LibraryModal
              libraryToViewport={this.props.screenProps.libraryToViewport}
              navigate={this.props.navigation.navigate}
              currentPalette={this.props.screenProps.currentPalette}
              toggleLibraryModal={this.props.screenProps.toggleLibraryModal}
              currentPaletteMounted={
                this.props.screenProps.currentPaletteMounted
              }
              resetCurrentPalette={this.props.screenProps.resetCurrentPalette}
              deletePalette={this.props.screenProps.deletePalette}
              //
              inspectSwatchModalOpen={
                this.props.screenProps.inspectSwatchModalOpen
              }
              toggleSwatchInspectModal={
                this.props.screenProps.toggleSwatchInspectModal
              }
              currentInspectSwatch={this.props.screenProps.currentInspectSwatch}
            />
          </Modal>
        </View>
      );
    } else {
      return <Loading />;
    }
  }
}

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Modal,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from "react-native";
import ColorHelper from "color-to-name";
import pant from "nearest-pantone";
import invert from "invert-color";
import Icon from "react-native-vector-icons/Ionicons";
import style from "../../../Style";
//
import Aux from "../../../Aux";
import Loading from "../../../Loading";
//
import SwatchModal from "../../../utility/SwatchModal";

const { width, height } = Dimensions.get("window");

export default class LibraryModal extends Component {
  inspectSwatchHandler = color => {
    this.props.toggleSwatchInspectModal(color);
  };

  renderCurrentPalette = (swatch, key) => {
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        key={key}
        underlayColor="transparent"
        onPress={() => {
          this.inspectSwatchHandler(swatch);
        }}
      >
        <View
          style={{
            backgroundColor: swatch,
            borderColor: swatch,
            flex: 1,
            justifyContent: "center",
            paddingLeft: 20
          }}
        >
          <Text style={{ color: invert(swatch, true) }}>
            {pant.getClosestColor(swatch)
              ? pant.getClosestColor(swatch).name.toUpperCase()
              : "BLACK"}
          </Text>
          <Text style={{ color: invert(swatch, true) }}>
            {swatch.toUpperCase()}
          </Text>
          <Text style={{ color: invert(swatch, true) }}>{`R: ${
            ColorHelper.hexToRGB(swatch).r
          } G: ${ColorHelper.hexToRGB(swatch).g} B: ${
            ColorHelper.hexToRGB(swatch).b
          }`}</Text>
          <Text style={{ color: invert(swatch, true) }}>
            {pant.getClosestColor(swatch)
              ? `PANTONE\xAE ${pant.getClosestColor(swatch).pantone}`
              : "No Pantone"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    if (this.props.currentPaletteMounted) {
      const palette = this.props.currentPalette.swatches.map(
        this.renderCurrentPalette
      );
      return (
        <Aux>
          <StatusBar barStyle="dark-content" hidden={false} />
          <View style={style.statusPadding} />

          <View
            style={{
              height: height / 10,
              backgroundColor: "#eee",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1
            }}
          >
            <View>
              <Icon.Button
                size={40}
                name="md-trash"
                backgroundColor="transparent"
                color="#b00"
                onLongPress={() =>
                  this.props.deletePalette(this.props.currentPalette.name)
                }
                underlayColor="transparent"
              />
            </View>
            <Text
              style={{
                fontSize: 24,
                fontFamily: "Helvetica-Bold"
              }}
            >
              Palette
            </Text>
            <View>
              <Icon.Button
                size={40}
                name="md-close-circle"
                backgroundColor="transparent"
                color="#91268d"
                onPress={this.props.resetCurrentPalette}
                underlayColor="transparent"
              />
            </View>
          </View>
          <View style={style.flex1}>{palette}</View>
          <Modal
            animationType="fade"
            transparent={false}
            visible={this.props.inspectSwatchModalOpen}
          >
            <SwatchModal
              libraryToViewport={this.props.libraryToViewport}
              navigate={this.props.navigate}
              currentPaletteMounted={this.props.currentPaletteMounted}
              swatch={this.props.currentInspectSwatch}
              toggleSwatchInspectModal={this.props.toggleSwatchInspectModal}
            />
          </Modal>
        </Aux>
      );
    } else {
      return <Loading />;
    }
  }
}

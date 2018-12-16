import React, { Component } from "react";
import { Text, View } from "react-native";
import CameraContainer from "../containers/CameraContainer";
import Layout from "../shared/Layout";

export default class CameraScreen extends Component {
  render() {
    return (
      <Layout>
        <CameraContainer />
      </Layout>
    );
  }
}

import React, { Component } from "react";
import Layout from "../../shared/layouts/Layout";
import CameraContainer from "../../containers/camera/CameraContainer";

export default class CameraScreen extends Component {
  
  render() {
    return (
      <Layout>
        <CameraContainer navigation={this.props.navigation}/>
      </Layout>
    );
  }
}

import React, { Component, Fragment } from "react";
import { CameraRoll, View ,Text} from "react-native";
import ScrollableList from "../../shared/tools/lists/ScrollableList";
import ResponsiveImage from "../../shared/tools/images/ResponsiveImage";

export default class CameraRollContainer extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      pageInfo: {}
    };
  }

  getPhotos = async () => {
    const photos = await CameraRoll.getPhotos({
      first: 20,
      assetType: "All"
    });
    this.setState({
      photos: photos.edges,
      pageInfo: photos.page_info
    });
    console.log("pix", photos);
  };

  componentDidMount() {
    this.getPhotos();
  }

  render() {
      const cameraRollPhotos = this.state.photos.length ? this.state.photos.map((image, key) => (
        <ResponsiveImage key={key} src={image.node.image.uri} />
      )): <Text>NOTING yet</Text>
      console.log('birg',cameraRollPhotos)
    return (
      <Fragment>
        {/* <LargeImage>

        </LargeImage> */}
        <ScrollableList >
          {cameraRollPhotos}
        </ScrollableList>
      </Fragment>
    );
  }
}

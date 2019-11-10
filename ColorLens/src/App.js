import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "./navigation/Router";
import { AsyncStorage } from "react-native";

console.disableYellowBox = true;

const errorHandler = ErrorUtils.getGlobalHandler();

class App extends Component {
  componentDidMount() {
    ErrorUtils.setGlobalHandler(this.wrapGlobalHandler.bind(this));
    // this.props.fetchStudioImages()
  }

  async wrapGlobalHandler(error, isFatal) {
    // If the error kills our app in Release mode, make sure we don't rehydrate
    // with an invalid Redux state and cleanly go back to login page instead
    if (isFatal && !__DEV__) AsyncStorage.clear();

    //Once finished, make sure react-native also gets the error
    if (errorHandler) errorHandler(error, isFatal);
  }

  render() {
    return <Navigation />;
  }
}

const mapDispatchToProps = () => ({
  // fetchStudioImages: () => dispatch(studioActions.fetchStudioImages())
});

export default connect(null, mapDispatchToProps)(App);

import React, { Component } from "react";
import { Animated } from "react-native";

export default class AnimatedView extends Component {
  state = {
    animationValue: new Animated.Value(this.props.animation.starting)
  };

  openMenu() {
    Animated.timing(this.state.animationValue, {
      toValue: this.props.animation.ending,
      duration: 300
    }).start();
  }
  componentDidUpdate(prevProps) {
    if (this.props.shouldLaunch !== prevProps.shouldLaunch) {
      this.openMenu();
    }
  }
  render() {
    const { animationValue } = this.state;
    return (
      <Animated.View style={{ ...this.props.style, [this.props.animation.key]: animationValue }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

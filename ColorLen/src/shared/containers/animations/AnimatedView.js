import React, { Component } from "react";
import { Animated } from "react-native";

export default class AnimatedView extends Component {
  state = {
    animationValue: new Animated.Value(this.props.animation.starting)
  };
  static defaultProps = {
    speed: 12
  };
  startAnimation = () =>
    Animated.spring(this.state.animationValue, {
      toValue: this.props.animation.ending,
      speed: this.props.speed
    }).start();

  reverseAnimation = () =>
    Animated.spring(this.state.animationValue, {
      toValue: this.props.animation.starting,
      speed: this.props.speed
    }).start();

  componentDidUpdate(prevProps) {
    if (this.props.shouldLaunch !== prevProps.shouldLaunch) {
      if (this.props.shouldLaunch) {
        this.startAnimation();
      } else {
        this.reverseAnimation();
      }
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

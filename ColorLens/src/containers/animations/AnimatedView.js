import React, { Component } from "react";
import { Animated } from "react-native";

export default class AnimatedView extends Component {
  state = {
    animationValue: new Animated.Value(this.props.animation.starting)
  };

  static defaultProps = {
    speed: 12
  };

  startAnimation = ({ toValue }) =>
    Animated.spring(this.state.animationValue, {
      toValue,
      speed: this.props.speed
    }).start();

  componentDidUpdate(prevProps) {
    const {
      shouldLaunch,
      animation: { starting, ending }
    } = this.props;
    const { shouldLaunch: prevLaunch } = prevProps;

    if (shouldLaunch !== prevLaunch) {
      if (this.props.shouldLaunch) {
        this.startAnimation({ toValue: ending });
      } else {
        this.startAnimation({ toValue: starting });
      }
    }
  }

  render() {
    const { animationValue } = this.state;
    const {
      style,
      children,
      animation: { key }
    } = this.props;

    return <Animated.View style={{ ...style, [key]: animationValue }}>{children}</Animated.View>;
  }
}

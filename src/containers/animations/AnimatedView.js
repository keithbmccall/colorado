import React, { Component } from "react";
import { Animated } from "react-native";

export default class AnimatedView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationValue: new Animated.Value(props.animation.starting)
    };
  }

  startAnimation = ({ toValue }) =>
    Animated.spring(this.state.animationValue, {
      toValue,
      speed: this.props.speed,
      useNativeDriver: true
    }).start();

  componentDidUpdate(prevProps) {
    const {
      shouldLaunch,
      animation: { starting, ending }
    } = this.props;
    const { shouldLaunch: prevLaunch } = prevProps;

    if (shouldLaunch !== prevLaunch) {
      if (shouldLaunch) {
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

    return (
      <Animated.View style={{ ...style, transform: [{ [key]: animationValue }] }}>
        {children}
      </Animated.View>
    );
  }
}

AnimatedView.defaultProps = {
  speed: 12
};

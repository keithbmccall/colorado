import React, {Component, ReactNode} from "react";
import {Animated} from "react-native";

type Props = {
    children: ReactNode,
    animation: {
        ending: number,
        starting: number,
        key: string
    },
    speed?: number,
    shouldLaunch: boolean,
    style?: object
}
type State = {
    animationValue: any
}
export default class AnimatedView extends Component<Props, State> {
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


    componentDidUpdate(prevProps: Props) {
        if (this.props.shouldLaunch !== prevProps.shouldLaunch) {
            this.props.shouldLaunch ? this.startAnimation() : this.reverseAnimation();
        }
    }

    render() {
        const {animationValue} = this.state;
        return (
            <Animated.View style={{...this.props.style, [this.props.animation.key]: animationValue}}>
                {this.props.children}
            </Animated.View>
        );
    }
}


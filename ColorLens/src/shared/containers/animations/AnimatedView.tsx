import React, {Component, ReactNode} from "react";
import {Animated} from "react-native";

type Props = {
    children: ReactNode,
    animation: {
        ending: number,
        starting: number,
        key: string
    },
    duration: number,
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
        duration: 300
    }
    startAnimation = () =>
        Animated.timing(this.state.animationValue, {
            toValue: this.props.animation.ending,
            duration: this.props.duration
        }).start();


    reverseAnimation = () =>
        Animated.timing(this.state.animationValue, {
            toValue: this.props.animation.starting,
            duration: this.props.duration
        }).start();


    componentDidUpdate(prevProps: Props) {
        if (this.props.shouldLaunch !== prevProps.shouldLaunch) {
            this.props.shouldLaunch ? this.startAnimation() : this.reverseAnimation();
        }
    }

    render() {
        const {animationValue} = this.state;
        return (
            <Animated.View style={{flex: 1, ...this.props.style, [this.props.animation.key]: animationValue}}>
                {this.props.children}
            </Animated.View>
        );
    }
}


import React, {Component} from "react";
import {Animated} from "react-native";

export default class AnimatedView extends Component {
    state = {
        animationValue: new Animated.Value(this.props.animation.starting)
    };

    openMenu = () => {
        Animated.timing(this.state.animationValue, {
            toValue: this.props.animation.ending,
            duration: 300
        }).start();
    }
    closeMenu = () => {
        Animated.timing(this.state.animationValue, {
            toValue: this.props.animation.starting,
            duration: 300
        }).start();
    }

    componentDidUpdate(prevProps) {
        console.log("s",this.props.shouldLaunch,prevProps.shouldLaunch)
        if (this.props.shouldLaunch !== prevProps.shouldLaunch) {
            console.log("shoul",this.props.shouldLaunch,prevProps.shouldLaunch)
            if (this.props.shouldLaunch) {
                this.openMenu();
            } else if (!this.props.shouldLaunch) {
                this.closeMenu();
            }
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

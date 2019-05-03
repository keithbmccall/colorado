import React, {Component} from "react";
import PropTypes from "prop-types";
import {Animated} from "react-native";

export default class AnimatedView extends Component {
    state = {
        animationValue: new Animated.Value(this.props.animation.starting)
    };

    openMenu = () => {
        Animated.timing(this.state.animationValue, {
            toValue: this.props.animation.ending,
            duration: this.props.duration
        }).start();
    }

    closeMenu = () => {
        Animated.timing(this.state.animationValue, {
            toValue: this.props.animation.starting,
            duration: this.props.duration
        }).start();
    }

    componentDidUpdate(prevProps) {
        if (this.props.shouldLaunch !== prevProps.shouldLaunch) {
            this.props.shouldLaunch ? this.openMenu() : this.closeMenu();
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
AnimatedView.defaultProps = {
    duration: 300
}
AnimatedView.propTypes = {
    shouldLaunch: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
    animation: PropTypes.shape({
        key: PropTypes.string,
        starting: PropTypes.number,
        ending: PropTypes.number
    })

};
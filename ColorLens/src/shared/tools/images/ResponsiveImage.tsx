import React, {Component, Fragment} from "react";
import {Image, View} from "react-native";
// @ts-ignore
import {LoadingView} from "shared/containers";

type Props = {
    onReady?: any,
    src: string,
    resizeMode?: any,
    style?: {
        width: string | number,
        height: string | number
    }
}

type State = {
    isLoaded: boolean
}

class ResponsiveImage extends Component<Props, State> {
    state = {
        isLoaded: false
    }
    static defaultProps = {
        resizeMode: "cover",
        style: {width: "100%", height: "100%"}
    };
    imageIsLoaded = () => {
        this.props.onReady && this.props.onReady();
        this.setState({
            isLoaded: true
        });
    };
    isValidNumberOrPercentage = (style: number | string) => {
        if (typeof style === "number") {
            return;
        } else if (
            style[style.length - 1] === "%"
        ) {
            return;
        }
        return new Error(
            `Invalid prop '${style}' supplied to ResponsiveImage. Expected a Number or Stringed number as a percentage but received: ${style}`
        );
    };

    componentDidMount(): void {
        if (this.props.style) this.isValidNumberOrPercentage(this.props.style.width) && this.isValidNumberOrPercentage(this.props.style.height);
    }

    render() {

        return (
            <Fragment>
                <Image
                    source={{uri: this.props.src}}
                    style={this.props.style}
                    onLoad={this.imageIsLoaded}
                    resizeMode={this.props.resizeMode}
                />
                {!this.state.isLoaded && (
                    <LoadingView blank={false}/>
                )}
            </Fragment>
        );
    }
}


export default ResponsiveImage;

import React, {Component} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import Navigation from "./navigation/Router";
// @ts-ignore
import {studioActions} from "store/actions";


console.disableYellowBox = true;

type Props = {
    fetchStudioImages(): any
}

class App extends Component<Props> {
    componentDidMount() {
        this.props.fetchStudioImages()
    }

    render() {
        return (<Navigation/>);
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchStudioImages: () => dispatch(studioActions.fetchStudioImages())
});

export default connect(null, mapDispatchToProps)(App)
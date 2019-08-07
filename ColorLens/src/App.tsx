import React, {Component} from "react";
import {connect} from "react-redux";
import Navigation from "./navigation/Router";
import {ThunkDispatch} from "redux-thunk";

console.disableYellowBox = true;

type Props = {
    fetchStudioImages(): any
}

class App extends Component<Props> {
    componentDidMount() {
        // this.props.fetchStudioImages()
    }

    render() {
        return (<Navigation/>);
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    // fetchStudioImages: () => dispatch(studioActions.fetchStudioImages())
});

export default connect(null, mapDispatchToProps)(App)
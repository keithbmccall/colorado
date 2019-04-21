import React, {Component} from "react";
import {connect} from "react-redux";
import Navigation from "./navigation/Router";
import {studioActions} from "store/actions";


console.disableYellowBox = true;


class App extends Component {


    componentDidMount() {
        this.props.fetchStudioImages()
    }

    render() {
        return (<Navigation/>);
    }
}

const mapDispatchToProps = dispatch => ({
    fetchStudioImages: () => dispatch(studioActions.fetchStudioImages())
});

export default connect(null, mapDispatchToProps)(App)
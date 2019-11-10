import React, {Component} from "react";
import {connect} from "react-redux";
import Navigation from "./navigation/Router";
import {ThunkDispatch} from "redux-thunk";
import {AsyncStorage} from "react-native";

console.disableYellowBox = true;

type Props = {
    fetchStudioImages(): any
}
const errorHandler = ErrorUtils.getGlobalHandler()

class App extends Component<Props> {

    componentDidMount() {
        // this.props.fetchStudioImages()
    }

    componentWillMount() {
        ErrorUtils.setGlobalHandler(this.wrapGlobalHandler.bind(this))
    }

    async wrapGlobalHandler(error: any, isFatal: boolean | any) {
        // If the error kills our app in Release mode, make sure we don't rehydrate
        // with an invalid Redux state and cleanly go back to login page instead
        if (isFatal && !__DEV__) AsyncStorage.clear();

        //Once finished, make sure react-native also gets the error
        if (errorHandler) errorHandler(error, isFatal)
    }

    render() {
        return <Navigation/>;
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
    // fetchStudioImages: () => dispatch(studioActions.fetchStudioImages())
});

export default connect(null, mapDispatchToProps)(App)
import React, {Component} from "react";
import Navigation from "./navigation/Router";
import {Provider} from "react-redux";
import {initStore} from './store/config'

console.disableYellowBox = true;

const store = initStore();
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation/>
            </Provider>
        );
    }
}

/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from "react";
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import {initStore} from 'store/config'

const store = initStore();

const RNRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);

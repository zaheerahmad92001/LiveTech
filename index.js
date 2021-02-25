import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import store from './Src/Redux/Store';
import {Provider}from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RNRedux =()=>{
    return(
        <SafeAreaProvider>
        <Provider store={store}>
            <App/>
        </Provider>
        </SafeAreaProvider>
    
    )
}
AppRegistry.registerComponent(appName, () => RNRedux);


// AppRegistry.registerComponent(appName, () => App);

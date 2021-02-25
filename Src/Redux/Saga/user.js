import AsyncStorage from '@react-native-community/async-storage';
import { call, put, takeLatest } from 'redux-saga/effects';
import types from '../Actions/types';
import store from '../Store';
import {login_user} from '../../Constant/StorageKey';

const saveUser = function* saveUser() {
    
    const user  = store.getState().reducersHandler.userInfo;
    // console.log('Zaheer',user)
    yield AsyncStorage.setItem(login_user,JSON.stringify(user));
}
const user = function* user() {
    yield takeLatest(types.loginUser, saveUser);
};

export default user;

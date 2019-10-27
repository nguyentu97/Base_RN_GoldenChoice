import { put, takeEvery, call } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native';
import {
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGIN_FAIL,
    REQUEST_LOGIN,
    REQUEST_REGISTER,
    REQUEST_REGISTER_SUCCESS,
    REQUEST_REGISTER_FAIL

} from '../actions/type';
import NavigationUtil from '../../navigation/NavigationUtil';
import { SCREEN_ROUTER } from '../../constants/Constant';
import * as API from '../../constants/Api'
import reactotron from 'reactotron-react-native';

export function* requestLogin(action) {
    try {
        const response = yield call(API.requestLogin, action.payload)
        // reactotron.log("response", response)
        yield call(AsyncStorage.setItem, "token", response.data.token);
        yield put({ type: REQUEST_LOGIN_SUCCESS, payload: response.data })
        NavigationUtil.navigate(SCREEN_ROUTER.SELECT_USER)
    } catch (err) {
        // reactotron.log("err", err) 
        yield put({ type: REQUEST_LOGIN_FAIL, payload: err })
    }
}
export function* requestRegister(action) {
    try {
        const response = yield call(API.requestRegister, action.payload)
        reactotron.log("response", response)
        yield call(AsyncStorage.setItem, "token", response.data.token);
        yield put({ type: REQUEST_REGISTER_SUCCESS, payload: response.data })
        // NavigationUtil.navigate(SCREEN_ROUTER.SELECT_USER)
    } catch (err) {
        reactotron.log("err", err)
        yield put({ type: REQUEST_REGISTER_FAIL, payload: err })
    }
}

export const watchLogin = takeEvery(REQUEST_LOGIN, requestLogin);
export const watchRegister = takeEvery(REQUEST_REGISTER, requestRegister);
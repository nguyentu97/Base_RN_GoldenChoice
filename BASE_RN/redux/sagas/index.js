import {
    watchLogin,
    watchRegister
} from './NetworkSaga'


export default function* rootSaga() {
    yield watchLogin,
    yield watchRegister
}
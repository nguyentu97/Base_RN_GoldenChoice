import {
    REQUEST_LOGIN,
    REQUEST_REGISTER
} from "./type";

export const requestLogin = (type, email, password) => ({
    type: REQUEST_LOGIN,
    payload: {
        type: type,
        email: email,
        password: password,
        // device_id: device_id
    }
})
export const requestRegister = (email, password) => ({
    type: REQUEST_REGISTER,
    payload: {
        email: email,
        password: password,
    }
})



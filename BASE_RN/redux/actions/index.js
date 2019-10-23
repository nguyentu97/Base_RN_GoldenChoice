import {
    REQUEST_LOGIN
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
// export const requestLogin = (type) => ({
//     type: REQUEST_LOGIN,
//     payload: type
// })


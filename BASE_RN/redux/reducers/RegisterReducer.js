import { REQUEST_REGISTER, REQUEST_REGISTER_FAIL, REQUEST_REGISTER_SUCCESS } from "../actions/type";

const initialState = {
    data: {},
    isLoading: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_REGISTER: {
            return {
                ...state,
                isLoading: true
            }
        }
        case REQUEST_REGISTER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload
            }
        }
        case REQUEST_REGISTER_FAIL: {
            return {
                ...state,
                isLoading: false,
                error: "Lỗi mạng",
                data: action.payload
            }
        }
        default:
            return state;
    }
}


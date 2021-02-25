import types from '../Actions/types'
const initialState = {
    userInfo: '',

}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.loginUser:
            return {
                ...state,
                userInfo: action.payload
            }
        default:
            return state
    }
}
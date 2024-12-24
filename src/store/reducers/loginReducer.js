import actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
  // isLogin: false, // Thông tin người dùng sau khi đăng ký
    token: null,
};
const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case actionTypes.LOGIN_SUCCESS: 
      return {
        ...state,
        loading: false,
        isLogin: action.payload.isLogin,
        token: action.payload.token
      };
    case actionTypes.LOGIN_FAIL: 
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default registerReducer;

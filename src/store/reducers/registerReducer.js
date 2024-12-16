import actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
  user: null, // Thông tin người dùng sau khi đăng ký
  isRegistered: false,
};
const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST: 
      return {
        ...state,
        loading: true,
        error: null,
        isRegistered: false,
      };
    case actionTypes.REGISTER_SUCCESS: 
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
        isRegistered: true,
      };
    case actionTypes.REGISTER_FAILURE: 
      return {
        ...state,
        loading: false,
        error: action.payload,
        isRegistered: false,
      };
    default:
      return state;
  }
};
export default registerReducer;

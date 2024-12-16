const initialState = {
    isLogin: false,
    token: null,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS": // Khi người dùng đăng nhập thành công
            return {
                ...state,
                isLogin: true,
                token: action.payload.token, // Lưu token từ action
            };
        case "LOGOUT": // Khi người dùng đăng xuất
            return {
                ...state,
                isLogin: false,
                token: null,
            };
        default:
            return state;
    }
    
}
export default authReducer;
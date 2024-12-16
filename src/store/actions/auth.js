import actionTypes from './actionTypes';
import { apiRegister,apiLogin } from '../../services/auth';


export const register = (data) => async (dispatch) => {
    dispatch({ type: actionTypes.REGISTER_REQUEST });
    try {
        const response = await apiRegister(data);
        console.log("Register response: ", response);
        if (response) {
            console.log("Register success");
            dispatch({ type: actionTypes.REGISTER_SUCCESS, payload: response });
            return response; // Return response for the component
        }
    } catch (error) {
        // console.log("Register error: ", error);
        // dispatch({ type: actionTypes.REGISTER_FAILURE, payload: error });
        const errorMessage = error.response?.data?.message || "Registration failed";
        dispatch({ 
            type: actionTypes.REGISTER_FAILURE, 
            payload: { message: errorMessage } 
        });
        throw error; // Re-throw the error so the component can handle it
    }
}

export const login = (data)=> async (dispatch) => {
    dispatch({ type: actionTypes.LOGIN });
    try {
        const response = await apiLogin(data);
        if(response){
        dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: response});} //response: token, isLogin
    } catch (error) {
        dispatch({ type: actionTypes.LOGIN_FAIL, payload: error });
    }
}
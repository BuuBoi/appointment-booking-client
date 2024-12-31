import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/DoctorCare'
    
});

instance.interceptors.request.use(function(config) {
    // do something before request is sent
    const token = localStorage.getItem('token'); 
    console.log("Token being sent:", token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;}
, function(error) {
    //do something with request error
    console.log(error);
    return Promise.reject(error);
});

// api.interceptors.response.use( --------------> xu ly token het han
//     (response) => response,
//     (error) => {
//       if (error.response?.status === 401) {
//         // Token hết hạn
//         localStorage.clear();
//         window.location.href = '/login';
//       }
//       return Promise.reject(error);
//     }
//   );

export default instance;
//Noi su dung la cac ham call api

import axios from 'axios';

const instance = axios.create({
    //baseURL: 'http://localhost:8080/DoctorCare'
    baseURL: "https://67673c8e560fbd14f18d47bb.mockapi.io"
});

instance.interceptors.request.use(function(config) {
    //do something before request is sent
    // const token = localStorage.getItem('persist:auth'); ==> tam thoi vo hieu hoa token
    // console.log(token);
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
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

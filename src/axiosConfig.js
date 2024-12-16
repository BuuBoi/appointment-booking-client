import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

instance.interceptors.request.use(function(config) {
    //do something before request is sent
    const token = localStorage.getItem('persist:auth');
    console.log(token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;}
, function(error) {
    //do something with request error
    console.log(error);
    return Promise.reject(error);
});

export default instance;
//Noi su dung la cac ham call api

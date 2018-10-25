import axios from 'axios'

//axios默认发送http请求时是不会在头信息中附带cookie
axios.defaults.withCredentials = true 

var instance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
   // withCredentials: true
});


export default instance;

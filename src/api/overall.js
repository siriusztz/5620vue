import axios from '../http';
//注册
let loginUser = params => {
    return axios.post('/user/signin', params)
}

let signUp = params => {
    return axios.post('/user/signup', params)
}

let logout = params => {
    return axios.post('/user/signout')
}

let getUserlist = params => {
    return axios.get('/user/userList', { params: params })
}

let getFacialRecognition = params => {
    return axios.get('/user/facial')
}

export default {
    loginUser,
    logout,
    signUp,
    getUserlist,
    getFacialRecognition,
}
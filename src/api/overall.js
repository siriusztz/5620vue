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

let getUserById = params => {
    return axios.get('/user/getone/' + params.id)
}

let updateUser = params => {
    return axios.post('/user/update', params)
}

let deleteOne = params => {
    return axios.delete('/user/delete/' + params.id)
}

export default {
    loginUser,
    logout,
    signUp,
    getUserlist,
    getFacialRecognition,
    getUserById,
    updateUser,
    deleteOne
}
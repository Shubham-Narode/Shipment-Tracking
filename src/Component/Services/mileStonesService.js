import axios from 'axios';
import { toast } from 'react-toastify';


let auth_token = "Token e29b32ce747344a94315a226f4d3d4489ac0897a"

function setTokenInHeader(token) {
    auth_token = token
}

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if (!expectedError) {
        toast.error("Please check internet connection..!!")
    }
    return Promise.reject(error);
})

axios.interceptors.request.use(function (config) {
    if (auth_token) {
        if (config.headers.Authorization === undefined) {
            config.headers['Content-Type'] = 'application/json';
            config.headers["Authorization"] = auth_token;
            return config
        }
        return config;
    }
    return config;
});

const HTTP = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setTokenInHeader
}

export default HTTP
import axios from 'axios'
const API = axios.create({
    baseURL: process.env.REACT_APP_TMDB_URL
});

API.interceptors.response.use(
    response => (response ? response.data : {}),
    (error) => {
        console.log(error)
    }
)

API.interceptors.response.use(async () =>
    config => {
        config.headers.authorization = `Bearer ${process.env.REACT_APP_TMDB_KEY}`
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default API
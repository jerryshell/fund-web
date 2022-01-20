import Axios from 'axios'

const axios = Axios.create({
    baseURL: `https://jerry-fund-server.herokuapp.com/`,
    // baseURL: `http://127.0.0.1:8080/`,
})

export default axios

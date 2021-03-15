import Axios from 'axios'

const axios = Axios.create({
  baseURL: `https://jerry-fund-server.herokuapp.com/`,
})

export default axios

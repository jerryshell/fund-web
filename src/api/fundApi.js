import axios from './api'

const fundApi = {
  getJerryIndexByCode: (code) => {
    return axios.get(`fund/jerryIndex/fundCode/${code}`)
  },
}

export default fundApi

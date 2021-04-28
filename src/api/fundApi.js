import axios from './api'

const fundApi = {
  getJerryIndexByCode: (code) => {
    return axios.get(`fund/jerryIndex/fundCode/${code}`)
  },
  getBaiduIndex: () => {
    return axios.get(`fund/baiduIndex`)
  }
}

export default fundApi

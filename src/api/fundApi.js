import axios from './api'

const fundApi = {
  getJerryIndexByCode: (code) => {
    return axios.get(`fund/jerryIndex/fundCode/${code}`)
  },
  getBaiduIndexByWord: (word) => {
    return axios.get(`fund/baiduIndex/keyword/${word}`)
  }
}

export default fundApi

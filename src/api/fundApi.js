import axios from './api'

const fundApi = {
  getJerryIndexByCode: (code) => {
    return axios.get(`fund/jerryIndex/fundCode/${code}`)
  },
  getBaiduIndexByWord: (word) => {
    return axios.get(`fund/baiduIndex/word/${word}`)
  }
}

export default fundApi

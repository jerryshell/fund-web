import axios from './api'

const fundApi = {
    getJerryIndexByCode: (code: string) => {
        return axios.get(`fund/jerryIndex/fundCode/${ code }`)
    },
    getBaiduIndexByWord: (word: string) => {
        return axios.get(`fund/baiduIndex/keyword/${ word }`)
    }
}

export default fundApi

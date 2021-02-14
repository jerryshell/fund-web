import { actionType } from './actionType'

export const actionCreator = {
  setFundList: (fundList) => {
    console.log('setFundList() fundList', fundList)
    return {
      type: actionType.setFundList,
      data: fundList,
    }
  },
  addFund: (newFund) => {
    console.log('addFund() newFund', newFund)
    return {
      type: actionType.addFund,
      data: newFund,
    }
  },
  removeFund: (fundCode) => {
    console.log('removeFund() fundCode', fundCode)
    return {
      type: actionType.removeFund,
      data: fundCode,
    }
  },
}

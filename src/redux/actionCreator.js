import { actionType } from './actionType'

export const actionCreator = {
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

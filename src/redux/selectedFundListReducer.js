import { actionType } from './actionType'

const initData = [
]

export const selectedFundListReducer = (state = initData, action) => {
  switch (action.type) {
    case actionType.pushSelectedFundList: {
      return state.concat(action.data)
    }
    case actionType.removeSelectedFundListByCode: {
      return state.filter(item => item.code !== action.data)
    }
    default: {
      console.log('selectedFundListReducer default action', action)
      return state
    }
  }
}

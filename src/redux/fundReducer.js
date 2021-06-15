import { actionType } from './actionType'

const initState = [
  {
    'name': '华夏沪深300ETF联接A',
    'code': '000051',
    'jerryIndex': 0,
  },
  {
    'name': '天弘沪深300ETF联接A',
    'code': '000961',
    'jerryIndex': 0,
  },
  {
    'name': '华宝中证100指数A',
    'code': '240014',
    'jerryIndex': 0,
  },
  {
    'name': '交银创业板50指数A',
    'code': '007464',
    'jerryIndex': 0,
  },
]

export const fundReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.setFundList: {
      const newFundList = action.data
      console.log('newFundList', newFundList)
      return [...newFundList]
    }
    case actionType.addFund: {
      const fundInState = state.find(item => item.code === action.data.code)
      console.log('fundInState', fundInState)
      if (fundInState) {
        fundInState.name = action.data.code
        return state.map(
          item => item.code === action.data.code ? fundInState : item,
        )
      }
      return state.concat(action.data)
    }
    case actionType.removeFund: {
      return state.filter(item => item.code !== action.data)
    }
    case actionType.setJerryIndexByCode: {
      const fundInState = state.find(item => item.code === action.data.code)
      console.log('fundInState', fundInState)
      if (!fundInState) {
        return state
      }
      fundInState.jerryIndex = action.data.jerryIndex
      return state.map(
        item => item.code === action.data.code ? fundInState : item,
      )
    }
    default: {
      console.log('fundReducer default action', action)
      return state
    }
  }
}

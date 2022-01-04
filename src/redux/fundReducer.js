import {actionType} from './actionType'

const initState = [
    {
        'name': '广发中证1000指数A',
        'code': '006486',
        'jerryIndex': 0,
    },
    {
        'name': '华夏中证500ETF联接A',
        'code': '001052',
        'jerryIndex': 0,
    },
    {
        'name': '易方达创业板ETF联接A',
        'code': '110026',
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
            return [action.data].concat(state)
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

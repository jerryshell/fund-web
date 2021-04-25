import { actionType } from './actionType'

const initState = [
  {
    'name': '景顺长城新兴成长混合',
    'code': '260108',
    'jerryIndex': 0,
  },
  {
    'name': '交银定期支付双息平衡混合',
    'code': '519732',
    'jerryIndex': 0,
  },
  {
    'name': '易方达蓝筹精选混合',
    'code': '005827',
    'jerryIndex': 0,
  },
  {
    'name': '工银瑞信文体产业股票A',
    'code': '001714',
    'jerryIndex': 0,
  },
  {
    'name': '易方达中小盘混合',
    'code': '110011',
    'jerryIndex': 0,
  },
  {
    'name': '泓德远见回报混合',
    'code': '001500',
    'jerryIndex': 0,
  },
  {
    'name': '兴全合润混合',
    'code': '163406',
    'jerryIndex': 0,
  },
  {
    'name': '兴全趋势投资混合(LOF)',
    'code': '163402',
    'jerryIndex': 0,
  },
  {
    'name': '广发稳健增长A',
    'code': '270002',
    'jerryIndex': 0,
  },
  {
    'name': '中欧时代先锋股票C',
    'code': '004241',
    'jerryIndex': 0,
  },
  {
    'name': '富国新动力C',
    'code': '001510',
    'jerryIndex': 0,
  },
  {
    'name': '国富沪港深成长精选股票',
    'code': '001605',
    'jerryIndex': 0,
  },
  {
    'name': '南方优选成长混合',
    'code': '202023',
    'jerryIndex': 0,
  },
  {
    'name': '富国沪港深价值混合A',
    'code': '001371',
    'jerryIndex': 0,
  },
  {
    'name': '景顺长城优选混合',
    'code': '260101',
    'jerryIndex': 0,
  },
  {
    'name': '银华中小盘混合',
    'code': '180031',
    'jerryIndex': 0,
  },
  {
    'name': '中欧新蓝筹混合C',
    'code': '004237',
    'jerryIndex': 0,
  },
  {
    'name': '东方红产业升级混合',
    'code': '000619',
    'jerryIndex': 0,
  },
  {
    'name': '鹏华盛世创新混合(LOF)',
    'code': '160613',
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

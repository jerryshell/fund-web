import './App.css'
import React, { useState } from 'react'
import Fund from './compoment/Fund'

const App = () => {
  const [fundList, setFundList] = useState([
    {
      'name': '易方达中小盘混合',
      'code': '110011',
    },
    {
      'name': '景顺长城新兴成长混合',
      'code': '260108',
    },
    {
      'name': '农银新能源主题',
      'code': '002190',
    },
    {
      'name': '汇丰晋信智造先锋股票C',
      'code': '001644',
    },
    {
      'name': '易方达环保主题混合',
      'code': '001856',
    },
    {
      'name': '易方达蓝筹精选混合',
      'code': '005827',
    },
    {
      'name': '广发稳健增长混合A',
      'code': '270002',
    },
    {
      'name': '兴全合润混合(LOF)',
      'code': '163406',
    },
    {
      'name': '中欧时代先锋股票C',
      'code': '004241',
    },
    {
      'name': '交银定期支付双息平衡混合',
      'code': '519732',
    },
    {
      'name': '兴全趋势投资混合(LOF)',
      'code': '163402',
    },
    {
      'name': '银华中小盘混合',
      'code': '180031',
    },
    {
      'name': '景顺长城优选混合',
      'code': '260101',
    },
    {
      'name': '富国沪港深价值混合A',
      'code': '001371',
    },
    {
      'name': '南方优选成长混合A',
      'code': '202023',
    },
    {
      'name': '泓德远见回报混合',
      'code': '001500',
    },
    {
      'name': '国富沪港深成长精选股票',
      'code': '001605',
    },
    {
      'name': '中欧新蓝筹混合C',
      'code': '004237',
    },
    {
      'name': '鹏华盛世创新混合(LOF)',
      'code': '160613',
    },
    {
      'name': '工银文体产业股票A',
      'code': '001714',
    },
    {
      'name': '富国新动力灵活配置混合C',
      'code': '001510',
    },
  ])

  return (
    <div className="App">
      <h1>基金投资指标</h1>
      {
        fundList.map(fund => (
          <Fund
            name={fund.name}
            code={fund.code}
          />
        ))
      }
    </div>
  )
}

export default App

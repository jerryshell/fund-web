import './App.css'
import React from 'react'
import Fund from './component/Fund'
import { useSelector } from 'react-redux'

const App = () => {
  const fundList = useSelector(store => store.fundList)
  return (
    <div className="App">
      <h1>公募基金短线投资指标</h1>
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

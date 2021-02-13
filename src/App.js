import './App.css'
import React from 'react'
import { useSelector } from 'react-redux'
import FundTable from './component/FundTable'
import FundAdd from './component/FundAdd'

const App = () => {
  const fundList = useSelector(store => store.fundList)

  return (
    <div>
      <h1>公募基金短线投资指标</h1>
      <FundAdd/>
      <FundTable fundList={fundList}/>
    </div>
  )
}

export default App

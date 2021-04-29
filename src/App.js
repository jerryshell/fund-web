import './App.css'
import React from 'react'
import { useSelector } from 'react-redux'
import FundTable from './component/FundTable'
import FundAdd from './component/FundAdd'
import FundExport from './component/FundExport'
import FundImport from './component/FundImport'
import SelectedFundList from './component/SelectedFundList'
import BaiduIndex from './component/BaiduIndex'

const App = () => {
  const fundList = useSelector(store => store.fundList)

  return (
    <div>
      <h1>公募基金投资指标</h1>
      <BaiduIndex word={'基金'}/>
      <BaiduIndex word={'股票'}/>
      <FundAdd/>
      <FundExport/>
      <FundImport/>
      <SelectedFundList/>
      <FundTable fundList={fundList}/>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actionCreator } from '../redux/actionCreator'

const FundImport = (props) => {
  const dispatch = useDispatch()
  const [fundListStr, setFundListStr] = useState('')
  const [importResult, setImportResult] = useState('')

  const handleFundListStrChange = (e) => {
    setFundListStr(e.target.value)
  }

  const handleImportBtnClick = () => {
    try {
      const newFundList = JSON.parse(fundListStr)
      console.log(newFundList)
      dispatch(actionCreator.setFundList(newFundList))
      setImportResult('✅')
    } catch (e) {
      console.error(e)
      setImportResult('❌')
    } finally {
      setTimeout(() => {
        setImportResult('')
      }, 3000)
    }
  }

  return (
    <details>
      <summary>数据导入</summary>
      <textarea
        value={fundListStr}
        onChange={handleFundListStrChange}
      />
      <button onClick={handleImportBtnClick}>{importResult} 数据导入</button>
    </details>
  )
}

export default FundImport

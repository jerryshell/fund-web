import './App.css'
import React, { useState } from 'react'
import Fund from './component/Fund'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreator } from './redux/actionCreator'

const App = () => {
  const fundList = useSelector(store => store.fundList)
  const dispatch = useDispatch()

  const [newFund, setNewFund] = useState({
    name: '',
    code: '',
  })

  const handleNewFundNameChange = (e) => {
    setNewFund({
      ...newFund,
      name: e.target.value,
    })
  }

  const handleNewFundCodeChange = (e) => {
    setNewFund({
      ...newFund,
      code: e.target.value,
    })
  }

  const handleAddBtnClick = () => {
    console.log('handleAddBtnClick')
    console.log('newFund', newFund)
    dispatch(actionCreator.addFund({ ...newFund }))
    setNewFund({
      name: '',
      code: '',
    })
  }

  return (
    <div className="App">
      <h1>公募基金短线投资指标</h1>
      <details>
        <summary>添加基金</summary>
        <form>
          <label form={'fundName'}>基金名称</label>
          <input
            id={'fundName'}
            type={'text'}
            placeholder={'基金名称'}
            value={newFund.name}
            onChange={handleNewFundNameChange}
          />
          <label form={'fundCode'}>基金代码</label>
          <input
            id={'fundCode'}
            type={'text'}
            placeholder={'基金代码'}
            value={newFund.code}
            onChange={handleNewFundCodeChange}
          />
        </form>
        <button onClick={handleAddBtnClick}>添加</button>
      </details>

      <table>
        <thead>
        <tr>
          <th>
            名称
          </th>
          <th>
            代码
          </th>
          <th>
            投资指标
          </th>
          <th>
            更新指标
          </th>
        </tr>
        </thead>
        <tbody>
        {
          fundList.map(fund => (
            <Fund
              key={fund.code}
              name={fund.name}
              code={fund.code}
            />
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

export default App

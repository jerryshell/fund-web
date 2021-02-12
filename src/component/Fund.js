import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { actionCreator } from '../redux/actionCreator'

const Fund = (props) => {
  const dispatch = useDispatch()

  const [jerryIndex, setJerryIndex] = useState(0)
  const [jerryIndexClassName, setJerryIndexClassName] = useState('info')

  const fetchJerryIndex = () => {
    const url = `http://127.0.0.1:8080/fund/jerryIndex/fundCode/${props.code}`
    axios.get(url).then(response => {
      console.log(response)

      // setJerryIndex
      const jerryIndex = response.data
      setJerryIndex(jerryIndex)

      // setJerryIndexClassName
      if (jerryIndex <= -5) {
        setJerryIndexClassName('success')
      } else if (jerryIndex < 0) {
        setJerryIndexClassName('info')
      } else if (jerryIndex >= 5) {
        setJerryIndexClassName('danger')
      } else if (jerryIndex >= 0) {
        setJerryIndexClassName('warning')
      }

    }).catch(e => {
      console.error(e)
    })
  }

  const handleRemoveBtnClick = () => {
    console.log('handleRemoveBtnClick()')
    dispatch(actionCreator.removeFund(props.code))
  }

  const handleDetailBtnClick = () => {
    window.open(`https://fund.eastmoney.com/${props.code}.html`, '_blank')
  }

  useEffect(fetchJerryIndex, [props.code])

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.code}</td>
      <td className={jerryIndexClassName}>{jerryIndex}</td>
      <td>
        <button onClick={fetchJerryIndex}>更新指标</button>
      </td>
      <td>
        <button onClick={handleRemoveBtnClick}>删除</button>
      </td>
      <td>
        <button onClick={handleDetailBtnClick}>查看详情</button>
      </td>
    </tr>
  )
}

export default Fund

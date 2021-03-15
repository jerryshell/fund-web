import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreator } from '../redux/actionCreator'
import UpdateButtonIcon from './UpdateButtonIcon'
import JerryIndexText from './JerryIndexText'

const Fund = (props) => {
  const dispatch = useDispatch()
  const selectedFundList = useSelector(store => store.selectedFundList)

  const [jerryIndexClassName, setJerryIndexClassName] = useState('info')
  const [loading, setLoading] = useState(false)

  const fetchJerryIndex = () => {
    setLoading(true)
    const url = `http://127.0.0.1:8080/fund/jerryIndex/fundCode/${props.fund.code}`
    axios.get(url).then(response => {
      console.log('fetchJerryIndex() response', response)

      // setJerryIndex
      const jerryIndex = response.data
      dispatch(actionCreator.setJerryIndexByCode(jerryIndex, props.fund.code))

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
    }).finally(() => {
      setLoading(false)
    })
  }

  const handleRemoveBtnClick = () => {
    console.log('handleRemoveBtnClick()')
    dispatch(actionCreator.removeFund(props.fund.code))
  }

  const handleDetailBtnClick = () => {
    window.open(`https://fund.eastmoney.com/${props.fund.code}.html`, '_blank')
  }

  const handleCheckboxChange = (checked) => {
    if (checked) {
      dispatch(actionCreator.pushSelectedFundList(props.fund))
    } else {
      dispatch(actionCreator.removeSelectedFundListByCode(props.fund.code))
    }
  }

  useEffect(fetchJerryIndex, [dispatch, props.fund.code])

  return (
    <tr>
      <td>{props.fund.name}</td>
      <td>{props.fund.code}</td>
      <td>
        <JerryIndexText jerryIndex={props.fund.jerryIndex}/>
      </td>
      <td>
        <button
          onClick={fetchJerryIndex}
          disabled={loading}
        >
          <UpdateButtonIcon loading={loading}/>
        </button>
      </td>
      <td>
        <button onClick={handleRemoveBtnClick}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z"
              fill="currentColor"
            />
          </svg>
        </button>
      </td>
      <td>
        <button onClick={handleDetailBtnClick}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              d="M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24a2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24a2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24a.973.973 0 0 1 0-1.42z"
              fill="currentColor"
            />
          </svg>
        </button>
      </td>
      <td>
        <input
          type="checkbox"
          defaultChecked={selectedFundList.find(item => item.code === props.fund.code)}
          onChange={e => {handleCheckboxChange(e.target.checked)}}
        />
      </td>
    </tr>
  )
}

export default Fund

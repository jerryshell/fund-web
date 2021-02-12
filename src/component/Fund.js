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
        <button onClick={fetchJerryIndex}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="M1.75 16.002C3.353 20.098 7.338 23 12 23c6.075 0 11-4.925 11-11m-.75-4.002C20.649 3.901 16.663 1 12 1C5.925 1 1 5.925 1 12m8 4H1v8M23 0v8h-8"
            />
          </svg>
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
    </tr>
  )
}

export default Fund

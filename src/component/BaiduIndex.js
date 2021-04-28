import React, { useEffect, useState } from 'react'
import fundApi from '../api/fundApi'
import { Line } from '@ant-design/charts'

const BaiduIndex = () => {
  const [baiduDateList, setBaiduDateList] = useState([])
  const [baiduAllIndexList, setBaiduAllIndexList] = useState([])
  const [baiduAllIndexListSum, setBaiduAllIndexListSum] = useState(0)
  const [baiduAllIndexListAvg, setBaiduAllIndexListAvg] = useState(0)
  const [zip, setZip] = useState([])

  const config = {
    data: zip,
    padding: 'auto',
    xField: 'date',
    yField: 'value',
    annotations: [
      {
        type: 'regionFilter',
        start: ['min', 'mean'],
        end: ['max', '0'],
        color: '#F4664A',
      },
      {
        type: 'text',
        position: ['min', 'mean'],
        content: '平均数',
        style: { textBaseline: 'bottom' },
      },
      {
        type: 'line',
        start: ['min', 'mean'],
        end: ['max', 'mean'],
        style: {
          stroke: '#F4664A',
          lineDash: [2, 2],
        },
      },
    ],
  }

  // fetch baiduIndex
  useEffect(() => {
    fundApi.getBaiduIndex().then(response => {
      console.log('getBaiduIndex() response.data', response.data)
      setBaiduDateList(response.data.baiduDateList)
      setBaiduAllIndexList(response.data.baiduAllIndexList)
      setBaiduAllIndexListSum(response.data.baiduAllIndexListSum)
      setBaiduAllIndexListAvg(response.data.baiduAllIndexListAvg)
      const zip = baiduAllIndexList.map((item, index) => {
        return {
          'date': baiduDateList[index],
          'value': item,
        }
      })
      setZip(zip)
    })
  }, [baiduDateList, baiduAllIndexList, baiduAllIndexListSum, baiduAllIndexListAvg, zip])

  return (
    <details>
      <summary>百度搜索指数</summary>
      <h3>180 天平均数：{baiduAllIndexListAvg}</h3>
      <h3>今日搜索指数：{baiduAllIndexList[baiduAllIndexList.length - 1]}</h3>
      <Line {...config} />
    </details>
  )
}

export default BaiduIndex

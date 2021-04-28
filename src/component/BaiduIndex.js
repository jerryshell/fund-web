import React, { useEffect, useState } from 'react'
import fundApi from '../api/fundApi'

const BaiduIndex = () => {
  const [baiduDateList, setBaiduDateList] = useState([])
  const [baiduAllIndexList, setBaiduAllIndexList] = useState([])
  const [baiduAllIndexListSum, setBaiduAllIndexListSum] = useState(0)
  const [baiduAllIndexListAvg, setBaiduAllIndexListAvg] = useState(0)

  useEffect(() => {
    fundApi.getBaiduIndex().then(response => {
      console.log('getBaiduIndex() response.data', response.data)
      setBaiduDateList(response.data.baiduDateList)
      setBaiduAllIndexList(response.data.baiduAllIndexList)
      setBaiduAllIndexListSum(response.data.baiduAllIndexListSum)
      setBaiduAllIndexListAvg(response.data.baiduAllIndexListAvg)
    })
  }, [])

  return (
    <div>
      {JSON.stringify(baiduAllIndexList)}
    </div>
  )
}

export default BaiduIndex

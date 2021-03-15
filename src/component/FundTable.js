import React from 'react'
import Fund from './Fund'

const FundTable = (props) => {
  return (
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
        <th>
          删除
        </th>
        <th>
          查看详情
        </th>
        <th>
          操作
        </th>
      </tr>
      </thead>
      <tbody>
      {
        props.fundList.map(fund => (
          <Fund
            key={fund.code}
            fund={fund}
          />
        ))
      }
      </tbody>
    </table>
  )
}

export default FundTable

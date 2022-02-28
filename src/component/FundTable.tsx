import React from 'react'
import Fund from './Fund';
import {useAppSelector} from "../redux/hooks";

const FundTable = () => {
    const fundList = useAppSelector((state) => state.fundListSliceReducer.fundList)
    return (
        <article>
            <figure>
                <table role="grid">
                    <thead>
                    <tr>
                        <th>
                            名称
                        </th>
                        <th>
                            代码
                        </th>
                        <th>
                            投资指数
                        </th>
                        <th>
                            更新指数
                        </th>
                        <th>
                            删除
                        </th>
                        <th>
                            查看详情
                        </th>
                        <th>
                            加仓
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        fundList.map(fund => (
                            <Fund
                                key={fund.code}
                                fund={fund}
                            />
                        ))
                    }
                    </tbody>
                </table>
            </figure>
        </article>
    )
}

export default FundTable

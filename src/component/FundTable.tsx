import React from 'react'
import {useSelector} from "react-redux";
import FundData from '../interfaces/FundData';
import Fund from './Fund';

const FundTable = () => {
    const fundList = useSelector((store: { fundList: FundData[] }) => store.fundList)
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
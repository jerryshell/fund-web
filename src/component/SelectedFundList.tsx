import React, { useState } from 'react'
import JerryIndexText from './JerryIndexText'
import { useAppSelector } from '../redux/hooks'

const SelectedFundList = () => {
    const selectedFundList = useAppSelector((state) => state.selectedFundListSliceReducer.selectedFundList)

    const [totalAmount, setTotalAmount] = useState(0)

    if (selectedFundList.length <= 0) {
        return null
    }

    const jerryIndexList = selectedFundList.map(item => item.jerryIndex)
    const jerryIndexSum = jerryIndexList.reduce((a, b) => a + b)

    const tbody = selectedFundList.map(item => {
        return (
            <tr key={ item.code }>
                <td>
                    { item.name }
                </td>
                <td>
                    { item.code }
                </td>
                <td>
                    <JerryIndexText jerryIndex={ item.jerryIndex }/>
                </td>
                <td>
                    { (totalAmount * item.jerryIndex / jerryIndexSum).toFixed(2) }
                </td>
            </tr>
        )
    })

    return (
        <article>
            <details>
                <summary>加仓计算</summary>
                <p>
                    指数之和：{ jerryIndexSum.toFixed(2) }
                </p>

                <form>
                    <label>
                        本次加仓总金额
                    </label>
                    <input
                        type={ 'number' }
                        onChange={ e => setTotalAmount(Number(e.target.value)) }
                    />
                </form>

                <figure>
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
                                投资指数
                            </th>
                            <th>
                                本次加仓金额
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        { tbody }
                        </tbody>
                    </table>
                </figure>
            </details>
        </article>
    )
}

export default SelectedFundList

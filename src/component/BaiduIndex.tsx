import React, {useEffect, useState} from 'react'
import fundApi from '../api/fundApi'
import {Area, AreaChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'

const BaiduIndex = (props: {
    open: boolean,
    word: string,
}) => {
    const [baiduAllIndexList, setBaiduAllIndexList] = useState<number[]>([])
    const [baiduAllIndexListAvg, setBaiduAllIndexListAvg] = useState(0)
    const [showChartFlag, setShowChartFlag] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setShowChartFlag(false)
        fundApi.getBaiduIndexByWord(props.word).then(response => {
            const success = response.data.success
            if (success) {
                setBaiduAllIndexList(response.data.data.baiduAllIndexList)
                setBaiduAllIndexListAvg(response.data.data.baiduAllIndexListAvg)

                const data = response.data.data.baiduAllIndexList.map((item: number, index: number) => {
                    return {
                        'date': response.data.data.baiduDateList[index],
                        'value': item,
                    }
                })
                setData(data)

                setShowChartFlag(true)
            }
        })

    }, [props.word])

    return (
        <article>
            <details open={props.open}>
                <summary>百度搜索指数：{props.word}</summary>
                {
                    showChartFlag
                        ?
                        <div style={{height: '50vh'}}>
                            <p>180 天平均数：{baiduAllIndexListAvg.toFixed(2)}</p>
                            <p>当前搜索指数：{baiduAllIndexList[baiduAllIndexList.length - 1].toFixed(2)}</p>
                            <ResponsiveContainer height='80%'>
                                <AreaChart
                                    data={data}
                                    width={500}
                                    height={300}
                                >
                                    <XAxis dataKey='date' padding={{left: 30, right: 30}}/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <ReferenceLine
                                        y={baiduAllIndexListAvg}
                                        stroke='orange'
                                        strokeDasharray='3 3'
                                        label='平均数'
                                    />
                                    <Area
                                        type='monotone'
                                        dataKey='value'
                                        stroke='#8884d8'
                                        fill='#8884d8'
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                        :
                        <p>加载中...</p>
                }
            </details>
        </article>
    )
}
export default BaiduIndex

import React, {useEffect, useState} from 'react'
import fundApi from '../api/fundApi'
import {Line} from '@ant-design/charts'

const BaiduIndex = (props) => {
    const [baiduAllIndexList, setBaiduAllIndexList] = useState([])
    const [baiduAllIndexListAvg, setBaiduAllIndexListAvg] = useState(0)
    const [chartConfig, setChartConfig] = useState({})
    const [showChartFlag, setShowChartFlag] = useState(false)

    useEffect(() => {
        setShowChartFlag(false)
        fundApi.getBaiduIndexByWord(props.word).then(response => {
            console.log('getBaiduIndexByWord() word', props.word, 'response.data', response.data)

            setBaiduAllIndexList(response.data.data.baiduAllIndexList)
            setBaiduAllIndexListAvg(response.data.data.baiduAllIndexListAvg)

            const zip = response.data.data.baiduAllIndexList.map((item, index) => {
                return {
                    'date': response.data.data.baiduDateList[index],
                    'value': item,
                }
            })

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
                        style: {textBaseline: 'bottom'},
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
            setChartConfig(config)
            setShowChartFlag(true)
        })

    }, [props.word])

    return (
        <article>
            <details>
                <summary>百度搜索指数：{props.word}</summary>
                {
                    showChartFlag
                        ?
                        <div>
                            <p>180 天平均数：{baiduAllIndexListAvg.toFixed(2)}</p>
                            <p>当前搜索指数：{baiduAllIndexList[baiduAllIndexList.length - 1].toFixed(2)}</p>
                            <Line {...chartConfig} />
                        </div>
                        :
                        <p>加载中...</p>
                }
            </details>
        </article>
    )
}
export default BaiduIndex

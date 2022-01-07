import React, {useState} from 'react'
import {useSelector} from 'react-redux'

const FundExport = (props) => {
    const fundList = useSelector(state => state.fundList)
    const [copyResult, setCopyResult] = useState('')

    const fundListStr = JSON.stringify(fundList)
    const clipboard = navigator.clipboard || window.clipboard

    const handleCopyBtnClick = () => {
        clipboard.writeText(fundListStr).then(() => {
            setCopyResult('✅')
        }).catch((e) => {
            console.error(e)
            setCopyResult('❌')
        }).finally(() => {
            setTimeout(() => {
                setCopyResult('')
            }, 3000)
        })
    }

    return (
        <article>
            <details>
                <summary>数据导出</summary>
                <code>{fundListStr}</code>
                <button onClick={handleCopyBtnClick}>{copyResult} 复制到剪切板</button>
            </details>
        </article>
    )
}

export default FundExport

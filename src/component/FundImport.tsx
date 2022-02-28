import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {fundSliceActions} from "../redux/fundSlice";

const FundImport = () => {
    const dispatch = useDispatch()
    const [fundListStr, setFundListStr] = useState('')
    const [importResult, setImportResult] = useState('')

    const handleFundListStrChange = (fundListStr: string) => {
        setFundListStr(fundListStr)
    }

    const handleImportBtnClick = () => {
        try {
            const newFundList = JSON.parse(fundListStr)
            dispatch(fundSliceActions.setFundData(newFundList))
            setImportResult('✅')
        } catch (e) {
            console.error(e)
            setImportResult('❌')
        } finally {
            setTimeout(() => {
                setImportResult('')
            }, 3000)
        }
    }

    return (
        <article>
            <details>
                <summary>数据导入</summary>
                <textarea
                    value={fundListStr}
                    onChange={(e) => handleFundListStrChange(e.target.value)}
                />
                <button onClick={handleImportBtnClick}>{importResult} 数据导入</button>
            </details>
        </article>
    )
}

export default FundImport

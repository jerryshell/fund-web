import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {fundSliceActions} from "../redux/fundSlice";

const FundAdd = () => {
    const dispatch = useDispatch()

    const [newFund, setNewFund] = useState({
        name: '',
        code: '',
        jerryIndex: 0,
    })

    const handleNewFundNameChange = (name: string) => {
        setNewFund({
            ...newFund,
            name,
        })
    }

    const handleNewFundCodeChange = (code: string) => {
        setNewFund({
            ...newFund,
            code,
        })
    }

    const handleAddBtnClick = () => {
        dispatch(fundSliceActions.addFund({fund: {...newFund}}))
        setNewFund({
            name: '',
            code: '',
            jerryIndex: 0,
        })
    }

    return (
        <article>
            <details>
                <summary>添加基金</summary>
                <form>
                    <div className="grid">
                        <label>
                            基金名称
                            <input
                                type={'text'}
                                placeholder={'基金名称'}
                                value={newFund.name}
                                onChange={(e) => handleNewFundNameChange(e.target.value)}
                            />
                        </label>
                        <label>
                            基金代码
                            <input
                                type={'text'}
                                placeholder={'基金代码'}
                                value={newFund.code}
                                onChange={(e) => handleNewFundCodeChange(e.target.value)}
                            />
                        </label>
                    </div>
                </form>
                <button onClick={handleAddBtnClick}>添加</button>
            </details>
        </article>
    )
}

export default FundAdd

import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {actionCreator} from '../redux/actionCreator'

const FundAdd = () => {
    const dispatch = useDispatch()

    const [newFund, setNewFund] = useState({
        name: '',
        code: '',
    })

    const handleNewFundNameChange = (e) => {
        setNewFund({
            ...newFund,
            name: e.target.value,
        })
    }

    const handleNewFundCodeChange = (e) => {
        setNewFund({
            ...newFund,
            code: e.target.value,
        })
    }

    const handleAddBtnClick = () => {
        console.log('handleAddBtnClick')
        console.log('newFund', newFund)
        dispatch(actionCreator.addFund({...newFund}))
        setNewFund({
            name: '',
            code: '',
        })
    }

    return (
        <details>
            <summary>添加基金</summary>
            <form>
                <label>基金名称</label>
                <input
                    type={'text'}
                    placeholder={'基金名称'}
                    value={newFund.name}
                    onChange={handleNewFundNameChange}
                />
                <label>基金代码</label>
                <input
                    type={'text'}
                    placeholder={'基金代码'}
                    value={newFund.code}
                    onChange={handleNewFundCodeChange}
                />
            </form>
            <button onClick={handleAddBtnClick}>添加</button>
        </details>
    )
}

export default FundAdd

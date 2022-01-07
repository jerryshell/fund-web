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
                                onChange={handleNewFundNameChange}
                            />
                        </label>
                        <label>
                            基金代码
                            <input
                                type={'text'}
                                placeholder={'基金代码'}
                                value={newFund.code}
                                onChange={handleNewFundCodeChange}
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

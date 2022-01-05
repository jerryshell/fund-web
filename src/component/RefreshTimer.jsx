import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import fundApi from "../api/fundApi";
import {actionCreator} from "../redux/actionCreator";

const RefreshTimer = (props) => {
    const dispatch = useDispatch()
    const fundList = useSelector(store => store.fundList)
    const [timer, setTimer] = useState(0)
    const [enableFlag, setEnableFlag] = useState(false)
    const [refreshInterval, setRefreshInterval] = useState(3)

    useEffect(() => {
        clearInterval(timer)
        setTimer(0)

        if (enableFlag) {
            const timer = setInterval(() => {
                fundList.forEach(async (fund) => {
                    fetchJerryIndexByCode(fund.code)
                        .then(jerryIndex => dispatch(actionCreator.setJerryIndexByCode(jerryIndex, fund.code)))
                })
            }, refreshInterval * 1000)
            setTimer(timer)
        }

        return () => {
            clearInterval(timer)
            setTimer(0)
        }
    }, [enableFlag, refreshInterval])

    const fetchJerryIndexByCode = (code) => {
        return fundApi.getJerryIndexByCode(code)
            .then(response => response.data.data)
            .catch(e => {
                console.error(e)
            })
    }

    return (
        <fieldset>
            <legend>定时刷新</legend>
            <label>
                开启
                <input type="checkbox" checked={enableFlag} onChange={e => setEnableFlag(e.target.checked)}/>
            </label>
            <label>
                <input
                    type="number"
                    min="1"
                    value={refreshInterval}
                    onChange={e => setRefreshInterval(Number(e.target.value))}
                />
            </label>
            <span>秒</span>
        </fieldset>
    )
}

export default RefreshTimer

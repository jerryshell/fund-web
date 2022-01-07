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
        <article>
            <details open>
                <summary>定时刷新</summary>
                <form>
                    <label>
                        刷新间隔，秒
                        <input
                            type="number"
                            min="1"
                            value={refreshInterval}
                            onChange={e => setRefreshInterval(Number(e.target.value))}
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox" role="switch" checked={enableFlag}
                            onChange={e => setEnableFlag(e.target.checked)}
                        />
                        开启
                    </label>
                </form>
            </details>
        </article>
    )
}

export default RefreshTimer

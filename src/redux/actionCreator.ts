import FundData from '../interfaces/FundData'
import {actionType} from './actionType'

export const actionCreator = {
    setFundList: (fundList: FundData[]) => {
        console.log('setFundList() fundList', fundList)
        return {
            type: actionType.setFundList,
            data: fundList,
        }
    },
    addFund: (newFund: FundData) => {
        console.log('addFund() newFund', newFund)
        return {
            type: actionType.addFund,
            data: newFund,
        }
    },
    removeFund: (code: string) => {
        console.log('removeFund() code', code)
        return {
            type: actionType.removeFund,
            data: code,
        }
    },
    setJerryIndexByCode: (jerryIndex: number, code: string) => {
        console.log('setJerryIndexByCode() jerryIndex', jerryIndex, 'code', code)
        return {
            type: actionType.setJerryIndexByCode,
            data: {
                jerryIndex,
                code,
            },
        }
    },
    pushSelectedFundList: (fund: FundData) => {
        console.log('pushSelectedFundList() fund', fund)
        return {
            type: actionType.pushSelectedFundList,
            data: fund,
        }
    },
    removeSelectedFundListByCode: (code: string) => {
        console.log('removeSelectedFundListByCode() code', code)
        return {
            type: actionType.removeSelectedFundListByCode,
            data: code,
        }
    },
}

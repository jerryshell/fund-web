import {actionType} from './actionType'

export const actionCreator = {
    setFundList: (fundList) => {
        console.log('setFundList() fundList', fundList)
        return {
            type: actionType.setFundList,
            data: fundList,
        }
    },
    addFund: (newFund) => {
        console.log('addFund() newFund', newFund)
        return {
            type: actionType.addFund,
            data: newFund,
        }
    },
    removeFund: (code) => {
        console.log('removeFund() code', code)
        return {
            type: actionType.removeFund,
            data: code,
        }
    },
    setJerryIndexByCode: (jerryIndex, code) => {
        console.log('setJerryIndexByCode() jerryIndex', jerryIndex, 'code', code)
        return {
            type: actionType.setJerryIndexByCode,
            data: {
                jerryIndex,
                code,
            },
        }
    },
    pushSelectedFundList: (fund) => {
        console.log('pushSelectedFundList() fund', fund)
        return {
            type: actionType.pushSelectedFundList,
            data: fund,
        }
    },
    removeSelectedFundListByCode: (code) => {
        console.log('removeSelectedFundListByCode() code', code)
        return {
            type: actionType.removeSelectedFundListByCode,
            data: code,
        }
    },
}

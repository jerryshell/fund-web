import { createSlice } from '@reduxjs/toolkit'
import FundData from '../interfaces/FundData'

export const selectedFundListSlice = createSlice({
    name: 'selectedFundList',
    initialState: {
        selectedFundList: [] as FundData[]
    },
    reducers: {
        addFund: (state, action) => {
            state.selectedFundList.push(action.payload)
        },
        removeFundByCode: (state, action) => {
            state.selectedFundList.splice(state.selectedFundList.findIndex(fund => fund.code === action.payload), 1)
        },
        clearFundList: (state) => {
            state.selectedFundList.splice(0, state.selectedFundList.length)
        }
    }
})

export const selectedFundListSliceActions = selectedFundListSlice.actions

import {createSlice} from "@reduxjs/toolkit"
import FundData from "../interfaces/FundData"

export const selectedFundListSlice = createSlice({
    name: "selectedFundList",
    initialState: [] as FundData[],
    reducers: {
        addFund: (state, action) => {
            state.push(action.payload)
        },
        removeFundByCode: (state, action) => {
            state.splice(state.findIndex(fund => fund.code === action.payload), 1)
        },
        clearFundList: (state) => {
            state.splice(0, state.length)
        }
    }
})

export const selectedFundListSliceActions = selectedFundListSlice.actions

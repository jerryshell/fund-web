import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import FundData from "../interfaces/FundData";

export const fundListSlice = createSlice({
    name: "fund",
    initialState: {
        fundList: [
            {
                'name': '广发中证1000指数A',
                'code': '006486',
                'jerryIndex': 0,
            },
            {
                'name': '华夏中证500ETF联接A',
                'code': '001052',
                'jerryIndex': 0,
            },
            {
                'name': '易方达创业板ETF联接A',
                'code': '110026',
                'jerryIndex': 0,
            },
        ] as FundData[]
    },
    reducers: {
        setFundList: (state, action: PayloadAction<{ fundList: FundData[] }>) => {
            state.fundList = action.payload.fundList;
        },
        addFund: (state, action: PayloadAction<{ fund: FundData }>) => {
            state.fundList.push(action.payload.fund);
        },
        removeFundByCode: (state, action: PayloadAction<{ code: string }>) => {
            state.fundList.splice(state.fundList.findIndex(fund => fund.code === action.payload.code), 1);
        },
        setJerryIndexByCode: (state, action: PayloadAction<{ code: string, jerryIndex: number }>) => {
            const fund = state.fundList.find(fund => fund.code === action.payload.code);
            if (fund) {
                fund.jerryIndex = action.payload.jerryIndex;
            }
        },
    },
})

export const fundSliceActions = fundListSlice.actions

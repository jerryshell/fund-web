import {configureStore} from "@reduxjs/toolkit";
import {fundSlice} from "./fundSlice";
import {selectedFundListSlice} from "./selectedFundListSlice";

export const store = configureStore({
    reducer: {
        fundSliceReducer: fundSlice.reducer,
        selectedFundListSliceReducer: selectedFundListSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

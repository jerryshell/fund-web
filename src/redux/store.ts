import { configureStore } from '@reduxjs/toolkit'
import { fundListSlice } from './fundListSlice'
import { selectedFundListSlice } from './selectedFundListSlice'

export const store = configureStore({
    reducer: {
        fundListSliceReducer: fundListSlice.reducer,
        selectedFundListSliceReducer: selectedFundListSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

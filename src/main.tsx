import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {combineReducers, createStore} from 'redux'
import {fundReducer} from './redux/fundReducer'
import {Provider} from 'react-redux'
import {selectedFundListReducer} from './redux/selectedFundListReducer'

const reducer = combineReducers({
    fundList: fundReducer,
    selectedFundList: selectedFundListReducer,
})

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
)

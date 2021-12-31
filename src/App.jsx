import './App.css'
import React from 'react'
import FundTable from './component/FundTable'
import FundAdd from './component/FundAdd'
import FundExport from './component/FundExport'
import FundImport from './component/FundImport'
import SelectedFundList from './component/SelectedFundList'
import BaiduIndex from "./component/BaiduIndex";
import Header from "./component/Header";
import Footer from "./component/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <BaiduIndex word={'基金'}/>
            <BaiduIndex word={'股票'}/>
            <FundAdd/>
            <FundExport/>
            <FundImport/>
            <SelectedFundList/>
            <FundTable/>
            <Footer/>
        </>
    )
}

export default App

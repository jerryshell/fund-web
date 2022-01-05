import './App.css'
import React, {Suspense} from 'react'

const Header = React.lazy(() => import('./component/Header'))
const BaiduIndex = React.lazy(() => import('./component/BaiduIndex'))
const FundAdd = React.lazy(() => import('./component/FundAdd'))
const FundExport = React.lazy(() => import('./component/FundExport'))
const FundImport = React.lazy(() => import('./component/FundImport'))
const SelectedFundList = React.lazy(() => import('./component/SelectedFundList'))
const FundTable = React.lazy(() => import('./component/FundTable'))
const Footer = React.lazy(() => import('./component/Footer'))

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header/>
            <BaiduIndex word={'基金'}/>
            <BaiduIndex word={'股票'}/>
            <FundAdd/>
            <FundExport/>
            <FundImport/>
            <SelectedFundList/>
            <FundTable/>
            <Footer/>
        </Suspense>
    )
}

export default App
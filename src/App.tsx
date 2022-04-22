import './App.css'
import React, { Suspense } from 'react'

const Header = React.lazy(() => import('./component/Header'))
const BaiduIndex = React.lazy(() => import('./component/BaiduIndex'))
const FundAdd = React.lazy(() => import('./component/FundAdd'))
const FundExport = React.lazy(() => import('./component/FundExport'))
const FundImport = React.lazy(() => import('./component/FundImport'))
const RefreshTimer = React.lazy(() => import('./component/RefreshTimer'))
const SelectedFundList = React.lazy(() => import('./component/SelectedFundList'))
const FundTable = React.lazy(() => import('./component/FundTable'))
const Footer = React.lazy(() => import('./component/Footer'))

const App = () => {
    return (
        <Suspense fallback={ <div>Loading...</div> }>
            <main className="container">
                <Header/>
                <BaiduIndex
                    open={ true }
                    word={ '基金' }
                />
                <BaiduIndex
                    open={ true }
                    word={ '股票' }
                />
                <FundAdd/>
                <FundExport/>
                <FundImport/>
                <RefreshTimer/>
                <SelectedFundList/>
                <FundTable/>
                <Footer/>
            </main>
        </Suspense>
    )
}

export default App

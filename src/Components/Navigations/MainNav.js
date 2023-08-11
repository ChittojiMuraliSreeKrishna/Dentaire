import React, { useState } from 'react'
import Header from '../Static/Header'
import Footer from '../Static/Footer'
import Sidebar from '../Static/Sidebar'
import Pages from './Pages'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from '../Authentication/Login'

const MainNav = () => {
    const [login, setLogin] = useState(false)

    return (
        <Router>
            <div className='main'>
                <div className="main-header">
                    <Header setLogin={setLogin} />
                </div>
                <div className='main-body'>
                    <div className="main-body-side">
                        <Sidebar />
                    </div>
                    <div className="main-body-pages">
                        <Pages />
                        {login ? <Login onClose={setLogin} /> : ''}

                    </div>
                </div>
                <div className="main-footer">
                    <Footer />
                </div>
            </div>
        </Router>
    )
}

export default MainNav
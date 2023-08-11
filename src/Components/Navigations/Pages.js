import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Patients from '../Patients/Patients'
import Data from '../Data/Data'
import Appointments from '../Appointments/Appointments'

const Pages = () => {
    return (
        <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/patients" Component={Patients} />
            <Route path="/data" Component={Data} />
            <Route path="/appointment" Component={Appointments} />
        </Routes>
    )
}

export default Pages
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate()
    const hadleNav = (path) => {
        navigate(path)
    }

    const [active, setActive] = useState('home')

    return (
        <div className='sidebar'>
            <button className={active === 'home' ? 'active_item' : 'nav_item'} onClick={() => {
                hadleNav('/')
                setActive('home')
            }}>
                Home
            </button>
            <button className={active === 'patients' ? 'active_item' : 'nav_item'} onClick={() => {
                hadleNav('/patients')
                setActive('patients')
            }}>
                Patients
            </button>
            <button className={active === 'data' ? 'active_item' : 'nav_item'} onClick={() => {
                hadleNav('/data')
                setActive('data')
            }}>
                Data
            </button>
            <button className={active === 'appointment' ? 'active_item' : 'nav_item'} onClick={() => {
                hadleNav('/appointment')
                setActive('appointment')
            }}>
                Appointments
            </button>
        </div>
    )
}

export default Sidebar
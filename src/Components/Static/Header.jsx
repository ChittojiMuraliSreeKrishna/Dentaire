import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {


    return (
        <div className='header'>
            <div className='logo'>
                <div className='logo-main'>
                    <h3 className='logo-main-head'>Dentaire</h3>
                    <FontAwesomeIcon icon={faTooth} size='2x' color='red' />
                </div>
            </div>
            <div className='header-btns'>
                <button onClick={() => props.setLogin(true)}>
                    Login
                </button>
                <button>
                    Add [+]
                </button>
            </div>
        </div>
    )
}

export default Header
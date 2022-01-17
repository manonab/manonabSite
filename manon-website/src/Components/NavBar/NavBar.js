import React from 'react'
import { NavLink } from 'react-router-dom';
import "./NavBar.css"
const NavBar = () => {
    return (
        <>
        <nav className='navGroup'>
            <div className='navbarContainer'>
            <div>
                <h2 >
                    <span><text className='logo'>manonabel</text></span>
                </h2>
            </div>
            <div className='bigNav'>
                <ul className='listNav'>
                    <NavLink to="/" className="underlined"><li className='listItems'>Home</li></NavLink>
                    <NavLink to="/contact" className="underlined"><li className='listItems'>Contact</li></NavLink>
                </ul>
            </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar

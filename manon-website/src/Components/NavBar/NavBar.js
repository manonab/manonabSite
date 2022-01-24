import React from 'react'
import { NavLink } from 'react-router-dom';
import "./NavBar.css";
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
                    <NavLink to="/" className="underlined"><li className='listItems'><p style={{color:'#fff'}}>Home</p></li></NavLink>
                    <NavLink to="/contact" className="underlined"><li className='listItems'><p style={{color:'#fff'}}>Contact</p></li></NavLink>
                    <NavLink to="/resume" className="underlined"><li className='listItems'><p style={{color:'#fff'}}>Resume</p></li></NavLink>
                </ul>
            </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar

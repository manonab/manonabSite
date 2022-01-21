import React from 'react'
import { NavLink } from 'react-router-dom'
import './Contact.scss';

const Contact = () => {
    return (
        <div>
            <div className='bigTitle'>
            <span class='cut-contact'>Contact</span>
            </div>
            <div>
                <div className='contactBox'>
                    <p>Voulez-vous commencer une conversation avec moi ?</p>
                    <div className='buttonsChat'>
                        <NavLink
                            className="underlined"
                            to='/chat'>
                            <button>Oui</button>
                        </NavLink>
                        <NavLink
                            to='/'
                            className="underlined">
                            <button>Non</button>
                        </NavLink>
                    </div>
                    <p>Vous pouvez toujours me contacter via LinkedIn ou par mail</p>
                </div>
            </div>
        </div>
    )
}

export default Contact

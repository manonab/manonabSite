import React from 'react'
import { NavLink } from 'react-router-dom'
import './Contact.scss';

const Contact = ({switchLanguage}) => {
    return (
        <div>
            <div className='bigTitle'>
            <span class='cut-contact'>Contact</span>
            </div>
            {switchLanguage ? <h1>Formulaire de contact</h1> : <h1>contact form</h1>}
        </div>
    )
}

export default Contact

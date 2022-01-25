import axios from 'axios';
import React, { useState } from 'react'
import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import './Contact.scss';

const Contact = ({ switchLanguage }) => {

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [content, setContent] = useState('');
    const [email, setEmail] = useState('');

    const sendForm = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:4000/post_name', {
                name,
                company,
                content,
                email
            })
        } catch (err) { console.log(err) }
    };
    return (
        <div>
            <div className='bigTitle'>
                <span class='cut-contact'>Contact</span>
            </div>
            {switchLanguage ?
                <>
                    <p className='paragraph'>Vous pouvez me contacter via <FaLinkedinIn color='gold' />, ou via l'adresse suivante: <b style={{ color: 'gold' }}>abelcoindozm@gmail.com</b> ou alors directement via ce formulaire.</p>
                    <form className='form'>
                        <h4 className='titleForm'>Votre nom</h4>
                        <input value={name} required placeholder='nom' onChange={(e) => setName(e.target.value)}></input>
                        <h4 className='titleForm'>Votre entreprise</h4>
                        <input value={company} required placeholder='entreprise' onChange={(e) => setCompany(e.target.value)}></input>
                        <h4 className='titleForm'>Votre message</h4>
                        <textarea required placeholder='message' onChange={(e) => setContent(e.target.value)}></textarea>
                        <h4 className='titleForm'>Où puis-je vous contacter ?</h4>
                        <input value={email} required placeholder='adresse email' onChange={(e) => setEmail(e.target.value)}></input>
                        <button type="submit" onClick={() => sendForm()}>ENVOYER</button>
                    </form>
                </>
                :
                <>
                    <p className='paragraph'>You can reach me out via
                        <span className='linkedin'>
                            <a
                                className='alink'
                                href='https://www.linkedin.com/in/manon-abel-coindoz-b6449211a/'
                                target={'_blank'}>
                                <FaLinkedinIn size={30} style={{marginLeft:"05px", marginRight:'05px'}} />
                            </a>
                        </span>, or here: <b style={{ color: 'gold' }}>abelcoindozm@gmail.com</b> or directly via this form.</p>
                    <form className='form'>
                        <h4 className='titleForm'>Your name</h4>
                        <input value={name} required placeholder='name' onChange={(e) => setName(e.target.value)}></input>
                        <h4 className='titleForm'>Your company</h4>
                        <input value={company} required placeholder='company' onChange={(e) => setCompany(e.target.value)}></input>
                        <h4 className='titleForm'>Your message</h4>
                        <textarea required placeholder='message' onChange={(e) => setContent(e.target.value)}></textarea>
                        <h4 className='titleForm'>Where can I reach you out ?</h4>
                        <input value={email} required placeholder='email adress' onChange={(e) => setEmail(e.target.value)}></input>
                        <button type="submit" onClick={() => sendForm()}>SEND</button>
                    </form>
                </>
            }
        </div>
    )
}

export default Contact

import React from 'react';

import './Footer.css';
import { FaGithub,FaLinkedinIn,FaGooglePlusG } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='footerG'>
            <p className='nameFooter' style={{color:"#d9ed92"}}>@2022 Manon Abel-Coindoz</p>
            <ul className='iconGroup'>
                <li className='icons'>
                    <a className='alink' href='https://www.linkedin.com/in/manon-abel-coindoz-b6449211a/' target={'_blank'}>
                        <FaLinkedinIn size={30} />
                    </a>
                </li>
                <li className='icons'>
                    <a className='alink' href='https://github.com/manonab' target={'_blank'}>
                        <FaGithub size={30} />
                    </a>
                </li>
                <li className='icons'>
                    <a className='alink' href="mailto:abelcoindozm@gmail.com?subject=subject&cc=cc@example.com" target={'_blank'}>
                        <FaGooglePlusG size={30} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

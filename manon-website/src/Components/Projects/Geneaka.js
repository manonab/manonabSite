import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import reactNativeIcon from "../../assets/reactNativeIcon.png";
import vscode from '../../assets/vscode.png';
import geneakaVideo from '../../assets/geneakaVideo.mp4'
import gitIcons from '../../assets/gitIcons.png';
import Contact from '../Contact/Contact';
import { NavLink } from 'react-router-dom';

export default function Geneaka({switchLanguage}) {
    return (
        <div>
            <div className='bigTitle'>
            <span class='cut-geneaka'>GENEAKA</span>
            </div>
            {switchLanguage ? 
            <>
            <div className='group'>
                <div className='boxInfo'>
                    <h4 className='resumeTitle'>En bref</h4>
                    <p className='textResume'>Généaka est une entreprise spécialisé dans la création des arbres généalogiques.</p>
                    <p className='textResume'>Ils avaient besoin d'un site web pour présenter les types d'abres et pour avoir la possibilité aux clients de demander un devis.</p>
                    <a href='https://www.geneaka.fr' className='buttonWebsite' target='_blank'>
                        <p  style={{ color: '#fff' }}>Visiter le site</p>
                    </a>
                </div>
                <div className='videoGroup'>
                <video src={geneakaVideo} className='videoLanvest' autoPlay loop muted></video>
                </div>
                <div className='boxDetailsHidden'>
                <h4 className='resumeTitle'>Stack technique</h4>
                <div className='iconsGroup'>
                    <span className='icons'>
                        <img src={reactNativeIcon} className='reactLogo' style={{ width: "40px" }} alt='reactLogo' />
                    </span>
                    <span className='icons'>
                        <img src={gitIcons} className='reactLogo' style={{ width: "60px" }} alt='git logo' />
                    </span>
                    <span className='icons'>
                        <img src={vscode} className='reactLogo' style={{ width: "40px" }} alt='vscode logo' />
                    </span>
                </div>
                <p className='smallText'>N'hésitez pas à me contacter pour en savoir plus</p>
                <NavLink
                to="/contact" 
                className="underlined">
                <button 
                style={{ marginBottom: "20px", marginTop: "15px" }} 
                className='buttonLink'>
                    <p style={{ color: '#fff' }}>
                        Contact
                    </p>
                </button>
                </NavLink>
            </div>
            </div>
            <div className='boxDetails'>
                <h4 className='resumeTitle'>Stack technique</h4>
                <div className='iconsGroup'>
                    <span className='icons'>
                        <img src={reactNativeIcon} className='reactLogo' style={{ width: "40px" }} alt='reactLogo' />
                    </span>
                    <span className='icons'>
                        <img src={gitIcons} className='reactLogo' style={{ width: "60px" }} alt='git logo' />
                    </span>
                    <span className='icons'>
                        <img src={vscode} className='reactLogo' style={{ width: "40px" }} alt='vscode logo' />
                    </span>
                </div>
                <p className='smallText'>N'hésitez pas à me contacter pour en savoir plus</p>
                <NavLink
                to="/contact" 
                className="underlined">
                <button 
                style={{ marginBottom: "20px", marginTop: "15px" }} 
                className='buttonLink'>
                    <p style={{ color: '#fff' }}>
                        Contact
                    </p>
                </button>
                </NavLink>
            </div>
            </>
            :
            <>
                        <div className='group'>
                <div className='boxInfo'>
                <h4 className='resumeTitle'>In short</h4>
                    <p className='textResume'>Généaka is genealogical trees specialized company.</p>

                    <p className='textResume'>They needed a website to introduce their products such as their differents kind of trees and the associate prices. Clients can also contact the company with a contact form or can request via a form their personnalized prices estimate. </p>
                    <a href='https://www.geneaka.fr' className='buttonWebsite' target='_blank'>
                    <p  style={{ color: '#fff', textAlign:'center' }}>Visit the website</p>
                    </a>
                </div>
                <div className='videoGroup'>
                <video src={geneakaVideo} className='videoLanvest' autoPlay loop muted></video>
                </div>
                <div className='boxDetailsHidden'>
                <h4 className='resumeTitle'>Technical tools</h4>
                <div className='iconsGroup'>
                    <span className='icons'>
                        <img src={reactNativeIcon} className='reactLogo' style={{ width: "40px" }} alt='reactLogo' />
                    </span>
                    <span className='icons'>
                        <img src={gitIcons} className='reactLogo' style={{ width: "60px" }} alt='git logo' />
                    </span>
                    <span className='icons'>
                        <img src={vscode} className='reactLogo' style={{ width: "40px" }} alt='vscode logo' />
                    </span>
                </div>
                <p className='smallText'>Please, do not hesitate to reach me out</p>
                <NavLink
                to="/contact" 
                className="underlined">
                <button 
                style={{ marginBottom: "20px", marginTop: "15px" }} 
                className='buttonLink'>
                    <p style={{ color: '#fff' }}>
                        Contact
                    </p>
                </button>
                </NavLink>
            </div>
            </div>
            <div className='boxDetails'>
            <h4 className='resumeTitle'>Technical tools</h4>
                <div className='iconsGroup'>
                    <span className='icons'>
                        <img src={reactNativeIcon} className='reactLogo' style={{ width: "40px" }} alt='reactLogo' />
                    </span>
                    <span className='icons'>
                        <img src={gitIcons} className='reactLogo' style={{ width: "60px" }} alt='git logo' />
                    </span>
                    <span className='icons'>
                        <img src={vscode} className='reactLogo' style={{ width: "40px" }} alt='vscode logo' />
                    </span>
                </div>
                <p className='smallText'>Please, do not hesitate to reach me out</p>
                <NavLink
                to="/contact" 
                className="underlined">
                <button 
                style={{ marginBottom: "20px", marginTop: "15px" }} 
                className='buttonLink'>
                    <p style={{ color: '#fff' }}>
                        Contact
                    </p>
                </button>
                </NavLink>
            </div>
            </>
            }
        </div>
    )
}


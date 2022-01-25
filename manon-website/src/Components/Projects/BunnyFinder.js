import React from 'react'
import reactNativeIcon from "../../assets/reactNativeIcon.png";
import mongodbicon from '../../assets/mongodbicon.png';
import nodejsIcon from '../../assets/nodejsIcon.svg';
import vscode from '../../assets/vscode.png';
import gitIcons from '../../assets/gitIcons.png';
import { NavLink } from 'react-router-dom';

function BunnyFinder({switchLanguage}) {
    return (
        <div>
            <div className='bigTitle'>
            <span class='cut-bunny'>LANVEST</span>
            </div>
            {switchLanguage ?
            <>
            <div className='group'>
                <div className='boxInfo'>
                    <h4 className='resumeTitle'>En bref</h4>
                    <p className='textResume'>Bunny Finder est un projet personnel dans le but d'aider les propriétaires de lapins a mieux comprendre et gérer leurs lapin.</p>
                    <p className='textResume'>Elle est en cours de développement. Idéalement une fois terminé l'utilisateur pourra accèder a la liste des aliments autorisés pour les lapins, liste des vétérinaires N.A.C et bien d'autres fonctionnalités.</p>
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
                    <span className='icons'>
                        <img src={nodejsIcon} className='reactLogo' style={{ width: "70px" }} alt='vscode logo' />
                    </span>
                    <span className='icons'>
                        <img src={mongodbicon} className='reactLogo' style={{ width: "70px" }} alt='vscode logo' />
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
                    <p className='textResume'>Bunny Finder is a personnal project, the main purpose is to help rabbit's owner to know and understand better their rabbit.</p>
                    <p className='textResume'>This application is in development. There will be some usefull features like : finding aliments's list that is allowed to rabbits,  veterinary's list and more.</p>
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
                    <span className='icons'>
                        <img src={nodejsIcon} className='reactLogo' style={{ width: "70px" }} alt='vscode logo' />
                    </span>
                    <span className='icons'>
                        <img src={mongodbicon} className='reactLogo' style={{ width: "70px" }} alt='vscode logo' />
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

export default BunnyFinder

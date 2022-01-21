import React from 'react'
import reactNativeIcon from "../../assets/reactNativeIcon.png";
import mongodbicon from '../../assets/mongodbicon.png';
import nodejsIcon from '../../assets/nodejsIcon.svg';
import vscode from '../../assets/vscode.png';
import gitIcons from '../../assets/gitIcons.png';
import { NavLink } from 'react-router-dom';

function BunnyFinder() {
    return (
        <div>
            <div className='bigTitle'>
            <span class='cut-bunny'>LANVEST</span>
            </div>
            <div className='group'>
                <div className='boxInfo'>
                    <h4 className='resumeTitle'>En bref</h4>
                    <p className='textResume'>Bunny Finder est un projet personnel dans le but d'aider les propriétaires de lapins a mieux comprendre et gérer leurs lapin.</p>
                    <p className='textResume'>Elle est en cours de développement. Idéalement une fois terminé l'utilisateur pourra accèder a la liste des aliments autorisés pour les lapins, liste des vétérinaires N.A.C et bien d'autres fonctionnalités.</p>
                    <a href='https://www.geneaka.fr' target='_blank'>
                        Visiter le site
                    </a>
                </div>
                {/* <div className='videoGroup'>
                <video src={geneakaVideo} className='videoLanvest' autoPlay loop muted></video>
                </div> */}
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
                        Chat
                    </p>
                </button>
                </NavLink>             
            </div>
        </div>
    )
}

export default BunnyFinder

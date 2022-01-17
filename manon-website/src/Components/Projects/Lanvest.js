import React from 'react'
import { FiGithub } from "react-icons/fi";
import reactNativeIcon from "../../assets/reactNativeIcon.png";
import { NavLink } from "react-router-dom";
import vscode from '../../assets/vscode.png';
import lanvestVideo from "../../assets/lanvestVideo.mp4"
import gitIcons from '../../assets/gitIcons.png';
import { FaGithub,FaLinkedinIn,FaGooglePlusG } from "react-icons/fa";

function Lanvest() {
    let url = "https://lanvest.fr/"

    return (
        <div>
            <div className='bigTitle'>
                <span class='cut-lanvest'>LANVEST</span>
            </div>
            <div className='group'>
                <div className='boxInfo'>
                    <h4 className='resumeTitle'>En bref</h4>
                    <p className='textResume'>Lanvest est l'entreprise qui avait besoin de créer une application de gestion d'entreprise, c'est ainsi qu'est né le projet My S.E.E.N.</p>
                    <p className='textResume'>Ils avaient donc besoin d'un site vitrine qui présenterai My S.E.E.N.</p>
                </div>
                <div className='videoGroup'>
                <video src={lanvestVideo} className='videoLanvest' autoPlay loop muted></video>
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
                <button style={{ marginBottom: "20px", marginTop: "15px" }} className='buttonLink'><p style={{ color: '#fff' }}>Chat</p></button>
            </div>
        </div>
    )
}

export default Lanvest;

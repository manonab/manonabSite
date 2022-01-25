import React from 'react';
import './Projects.scss';
import reactNativeIcon from "../../assets/reactNativeIcon.png";
import mongodbicon from '../../assets/mongodbicon.png';
import nodejsIcon from '../../assets/nodejsIcon.svg';
import vscode from '../../assets/vscode.png';
import gitIcons from '../../assets/gitIcons.png';
import myseenvideo01 from "../../assets/myseenvideo01.mp4";
import { NavLink } from 'react-router-dom';

function Myseen({switchLanguage}) {
    return (
        <div>
            <div className='bigTitle'>
            <span class='cut-myseen'>My S.E.E.N</span>
            </div>
            {switchLanguage ? 
            <>
            <div className='groupMySeen'>
            <div className='boxInfo'>
                <h4 className='resumeTitle'>En bref</h4>
                <p className='textResume'>MyS.E.E.N est une application de management en interne. Elle a pour but d'améliorer la gestion des employés au sein de leur entreprise.</p>
                <p className='textResume'>Elle a différentes fonctionnalités en fonction de la catégorie de l'utilisateur. Il y a 4 catégories d'utilisateurs différent:</p>
                <ul className='list'>
                    <li className='listItems'>ADMIN</li>
                    <li className='listItems'>MANAGER</li>
                    <li className='listItems'>CHEEF</li>
                    <li className='listItems'>EMPLOYES</li>
                </ul>
                <p className='textResume'>Nous pouvons notamment retrouver un système de messagerie en interne, une gestion des fiches d'heures et enfin la création et consultation des chantiers.
                Cette application a été créée avec <b>React-Native</b>, le back-end avec <b>Node.js / Express.js</b> et la base de donnée avec <b>MongoDB</b>.                </p>
            </div>
            <div className='videoGroup'>
                <video src={myseenvideo01} className='video' autoPlay loop muted></video>
            </div>
            <div className='boxDetailsHidden'>
                <h4 className='resumeTitle'>Stack technique</h4>
                <div className='iconsGroup'>
                <span className='icons'><img src={reactNativeIcon} className='reactLogo'  style={{width:"40px"}} alt='reactLogo'/></span>
                <span className='icons'><img src={nodejsIcon} className='reactLogo' style={{width:"70px"}} alt='node js logo'/></span>
                <span className='icons'><img src={mongodbicon} className='reactLogo' style={{width:"70px"}} alt='mongodb logo'/></span>
                <span className='icons'><img src={gitIcons} className='reactLogo' style={{width:"60px"}} alt='git logo'/></span>
                <span className='icons'><img src={vscode} className='reactLogo' style={{width:"40px"}} alt='vscode logo'/></span>
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
                <span className='icons'><img src={reactNativeIcon} className='reactLogo'  style={{width:"40px"}} alt='reactLogo'/></span>
                <span className='icons'><img src={nodejsIcon} className='reactLogo' style={{width:"70px"}} alt='node js logo'/></span>
                <span className='icons'><img src={mongodbicon} className='reactLogo' style={{width:"70px"}} alt='mongodb logo'/></span>
                <span className='icons'><img src={gitIcons} className='reactLogo' style={{width:"60px"}} alt='git logo'/></span>
                <span className='icons'><img src={vscode} className='reactLogo' style={{width:"40px"}} alt='vscode logo'/></span>
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
            <div className='groupMySeen'>
            <div className='boxInfo'>
                <h4 className='resumeTitle'>In short</h4>
                <p className='textResume'>MY S.E.E.N is an managemement application available in both play store / apple store. The main purpose is to increase the employees management. </p>
                <p className='textResume'>This application has differents features depending on the user's level. There is 4 differents categories:</p>
                <ul className='list'>
                    <li className='listItems'>ADMIN</li>
                    <li className='listItems'>MANAGER</li>
                    <li className='listItems'>CHEEF</li>
                    <li className='listItems'>EMPLOYES</li>
                </ul>
                <p className='textResume'>In this application we have a chat system, time sheet management and the construction sites creation.
                This app had been created with <b>React-Native</b>, the back-end with <b>Node.js / Express.js</b> and the database is with <b>MongoDB</b>.
                </p>
            </div>
            <div className='videoGroup'>
                <video src={myseenvideo01} className='video' autoPlay loop muted></video>
            </div>
            <div className='boxDetailsHidden'>
            <h4 className='resumeTitle'>Technical tools</h4>
                <div className='iconsGroup'>
                <span className='icons'><img src={reactNativeIcon} className='reactLogo'  style={{width:"40px"}} alt='reactLogo'/></span>
                <span className='icons'><img src={nodejsIcon} className='reactLogo' style={{width:"70px"}} alt='node js logo'/></span>
                <span className='icons'><img src={mongodbicon} className='reactLogo' style={{width:"70px"}} alt='mongodb logo'/></span>
                <span className='icons'><img src={gitIcons} className='reactLogo' style={{width:"60px"}} alt='git logo'/></span>
                <span className='icons'><img src={vscode} className='reactLogo' style={{width:"40px"}} alt='vscode logo'/></span>
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
                <span className='icons'><img src={reactNativeIcon} className='reactLogo'  style={{width:"40px"}} alt='reactLogo'/></span>
                <span className='icons'><img src={nodejsIcon} className='reactLogo' style={{width:"70px"}} alt='node js logo'/></span>
                <span className='icons'><img src={mongodbicon} className='reactLogo' style={{width:"70px"}} alt='mongodb logo'/></span>
                <span className='icons'><img src={gitIcons} className='reactLogo' style={{width:"60px"}} alt='git logo'/></span>
                <span className='icons'><img src={vscode} className='reactLogo' style={{width:"40px"}} alt='vscode logo'/></span>
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
            </>}
        </div>
    )
}

export default Myseen

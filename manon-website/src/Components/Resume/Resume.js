import React from 'react';
import { NavLink } from 'react-router-dom';
import './Resume.scss'
import { FaPlaneDeparture, FaPizzaSlice, FaCameraRetro, FaPaw, FaBook } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

const Resume = ({switchLanguage}) => {
    return (
        <div>
            {switchLanguage ?
                <>
                    <div className='bigTitle'>
                        <span class='cut-resume'>CV</span>
                    </div>
                    <div className='groupResume'>
                        <span className='titles' style={{ marginTop: "2em", marginBottom: '2em' }}>EXPERIENCES</span>
                        <span className='experiencesGroup'>
                            <div className='dateCompanies'>
                                <h4 className='companies'>Lanvest</h4>
                                <p className='dates'>Mai.2021 - Décembre.2021 en <span style={{ fontWeight: "100", fontSize: "14px" }}><i>France</i></span></p>
                            </div>
                            <span className='insideExp'>
                                <p className='textExp'>Création d'une application de management en interne avec <b>react-native</b> , <b>node.js</b>, <b>express.js</b> et <b>mongodb</b>.</p>
                                <NavLink to='/projects/myseen'>
                                    <button>fiche application</button>
                                </NavLink>
                            </span>
                        </span>
                        <span className='experiencesGroup'>
                            <div className='dateCompanies'>
                                <h4 className='companies'>Focus Games</h4>
                                <p className='dates'>Oct.2020 - Avril.2021 à <span style={{ fontWeight: "100", fontSize: "14px" }}><i>GLASGOW</i></span></p>
                            </div>
                            <span className='insideExp'>
                                <p className='textExp'>Création d'un projet de marketing en interne avec <b>PHP</b> et <b>JS</b></p>
                            </span>
                        </span>
                        <div className='lineResume'></div>
                        <span className='titles' style={{ marginTop: "2em", marginBottom: '2em' }}>DIPLOMES ET FORMATIONS</span>
                        <span className='formationGroup'>
                            <p className='datesFormation'>2019</p>
                            <p className='formation'>Formation fullstack javascript à la wild code school.</p>
                            <p className='datesFormation'>2014</p>
                            <p className='formation'>Brevet des techniciens supérieur en communication et industries graphiques.</p>
                        </span>
                        <div className='lineResume' style={{ marginTop: "4em" }}></div>
                        <div className='titles' style={{ marginTop: "2em", marginBottom: '2em' }}>Loisirs</div>
                        <ul className='listLikes'>
                            <li><FaPaw size={30} className='iconsLikes' /></li>
                            <li><FaPlaneDeparture size={30} className='iconsLikes' /></li>
                            <li><FaCameraRetro size={30} className='iconsLikes' /></li>
                            <li><FaPizzaSlice size={30} className='iconsLikes' /></li>
                            <li><GiBookshelf size={30} className='iconsLikes' /></li>
                        </ul>
                    </div>
                </>
                :
                <>
                    <div className='bigTitle'>
                        <span class='cut-resumeEng'>RESUME</span>
                    </div>
                    <div className='groupResume'>
                        <span className='titles' style={{ marginTop: "2em", marginBottom: '2em' }}>EXPERIENCES</span>
                        <span className='experiencesGroup'>
                            <div className='dateCompanies'>
                                <h4 className='companies'>Lanvest</h4>
                                <p className='dates'>May.2021 - December.2021 in <span style={{ fontWeight: "100", fontSize: "14px" }}><i>France</i></span></p>
                            </div>
                            <span className='insideExp'>
                                <p className='textExp'>Creation of an internal management application with <b>react-native</b> , <b>node.js</b>, <b>express.js</b> and <b>mongodb</b>.</p>
                                <NavLink to='/projects/myseen'>
                                    <button>The application</button>
                                </NavLink>
                            </span>
                        </span>
                        <span className='experiencesGroup'>
                            <div className='dateCompanies'>
                                <h4 className='companies'>Focus Games</h4>
                                <p className='dates'>Oct.2020 - April.2021 At <span style={{ fontWeight: "100", fontSize: "14px" }}><i>GLASGOW</i></span></p>
                            </div>
                            <span className='insideExp'>
                                <p className='textExp'>Creation of an internal marketing tool with <b>PHP</b> and <b>JS</b></p>
                            </span>
                        </span>
                        <div className='lineResume'></div>
                        <span className='titles' style={{ marginTop: "2em", marginBottom: '2em' }}>DIPLOMAS AND TRAINING</span>
                        <span className='formationGroup'>
                            <p className='datesFormation'>2019</p>
                            <p className='formation'>Fullstack javascript training at th wild code school.</p>
                            <p className='datesFormation'>2014</p>
                            <p className='formation'>CERTIFICATE OF SUPERIOR TECHNICIANS IN COMMUNICATION AND GRAPHIC INDUSTRIES.</p>
                        </span>
                        <div className='lineResume' style={{ marginTop: "4em" }}></div>
                        <div className='titles' style={{ marginTop: "2em", marginBottom: '2em' }}>Hobbies</div>
                        <ul className='listLikes'>
                            <li><FaPaw size={30} className='iconsLikes' /></li>
                            <li><FaPlaneDeparture size={30} className='iconsLikes' /></li>
                            <li><FaCameraRetro size={30} className='iconsLikes' /></li>
                            <li><FaPizzaSlice size={30} className='iconsLikes' /></li>
                            <li><GiBookshelf size={30} className='iconsLikes' /></li>
                        </ul>
                    </div>
                </>
            }

        </div>
    );
}

export default Resume;

import React, { useState } from 'react'
// import "./NavBar.css";
import {
    NavbarContainer,
    NavBarInnerContainer,
    RightContainer,
    LeftContainer,
    NavBarExtendedContainer,
    NavBarLinkContainer,
    OpenLinksButton,
    Logo,
    NavBarLink,
    NavBarLinkExtended
} from "../../styles/Navbar.style";
import LogoImage from '../../assets/logo.png';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = ({ switchLanguage }) => {
    const [extendedNavBar, setExtendedNavBar] = useState(false);
    return (
        <NavbarContainer extendedNavBar={extendedNavBar}>
            <NavBarInnerContainer>
                <LeftContainer>
                    <NavBarLinkContainer>
                        {
                            switchLanguage ?
                                <>
                                    <NavBarLink to="/" className="underlined">
                                        Accueil
                                    </NavBarLink>
                                </>
                                :
                                <>
                                    <NavBarLink to="/" className="underlined">
                                        Home
                                    </NavBarLink>
                                </>
                        }
                        <NavBarLink to="/contact" className="underlined">
                            Contact
                        </NavBarLink>
                        {
                            switchLanguage ?
                                <>
                                    <NavBarLink to="/resume" className="underlined">
                                        C.V
                                    </NavBarLink>
                                </>
                                :
                                <>
                                    <NavBarLink to="/resume" className="underlined">
                                        Resume
                                    </NavBarLink>
                                </>
                        }
                        <OpenLinksButton onClick={() => {
                            setExtendedNavBar((curr) => !curr);
                        }}
                        >
                            {extendedNavBar ? <AiOutlineClose size={40} /> : <FaBars size={40} />}
                        </OpenLinksButton>
                    </NavBarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <Logo src={LogoImage} />
                </RightContainer>
            </NavBarInnerContainer>
            {extendedNavBar && (
                <NavBarExtendedContainer>
                    {
                        switchLanguage ?
                            <>
                                <NavBarLinkExtended to="/" className="underlined" onClick={() => setExtendedNavBar(false)}>
                                    Accueil
                                </NavBarLinkExtended>
                            </>
                            :
                            <>
                                <NavBarLinkExtended to="/" className="underlined" onClick={() => setExtendedNavBar(false)}>
                                    Home
                                </NavBarLinkExtended>
                            </>
                    }

                    <NavBarLinkExtended to="/contact" className="underlined" onClick={() => setExtendedNavBar(false)}>
                        Contact
                    </NavBarLinkExtended>
                    {
                        switchLanguage ?
                            <>
                                <NavBarLinkExtended to="/resume" className="underlined" onClick={() => setExtendedNavBar(false)}>
                                    C.V
                                </NavBarLinkExtended>
                            </>
                            :
                            <>
                                <NavBarLinkExtended to="/resume" className="underlined" onClick={() => setExtendedNavBar(false)}>
                                    Resume
                                </NavBarLinkExtended>
                            </>
                    }
                </NavBarExtendedContainer>
            )}
        </NavbarContainer>
    )
}

export default NavBar

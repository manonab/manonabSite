import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled.nav`
    width: auto;
    height: ${(props) => (props.extendedNavBar ? "100vh" : "80px")};
    background-color:#013a63;
    display: flex;
    opacity: 0.6;
    flex-direction: column;
`;

export const LeftContainer = styled.div`
    flex:70%;
    display: flex;
    align-items:center;
    padding-left: 5%;
    background-color:#013a63;
`;

export const RightContainer = styled.div`
    flex:30%;
    display: flex;
    align-items:flex-end;
    padding-right: 50px;
    background-color:#013a63;
`;
export const NavBarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavBarLinkContainer = styled.div`
display: flex;
`;
export const NavBarLink = styled(NavLink)`
color: white;
text-decoration: none;
font-weight: 100;
letter-spacing: 2px;
text-transform: uppercase;
font-family: 'Montserrat', sans-serif;
margin: 10px;
@media( max-width:700px ) {
    display: none;
}
`;
export const NavBarLinkExtended = styled(NavLink)`
color: white;
text-decoration: none;
font-weight: 100;
letter-spacing: 2px;
text-transform: uppercase;
font-size: 35px;
font-family: 'Montserrat', sans-serif;
margin: 20px;
`;

export const Logo = styled.img`
max-width: 180px;
margin-top: 10px;
height: 80px;
`;

export const OpenLinksButton = styled.button`
width: 70px;
height: 50px;
background: none;
border: none;
color: white;
cursor: pointer;
margin-bottom: auto;
margin-top: auto;
@media (min-width: 700px) {
    display: none;
}
`;

export const NavBarExtendedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 700px) {
    display: none;
}
`;
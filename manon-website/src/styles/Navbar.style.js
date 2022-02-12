import styled, {css} from "styled-components";
import { NavLink } from 'react-router-dom';
import Montserrat from "../assets/Fonts/Monsterrat/Montserrat-Light.ttf"

export const fontFaces = css`
  @font-face {
    font-family: 'Montserrat-Light';
    src: url(${Montserrat});
    font-style: normal;
  }
`;

export const NavbarContainer = styled.nav`
    width: auto;
    height: ${(props) => (props.extendedNavBar ? "100vh" : "80px")};
    background-color:#973465;
    display: flex;
    opacity: 1;
    flex-direction: column;
`;

export const LeftContainer = styled.div`
    flex:100%;
    display: flex;
    padding-left: 5%;
    background-color:#973465;
`;

export const RightContainer = styled.div`
    flex:40%;
    display: flex;
    align-items:center;
    padding-right: 50px;
    background-color:#973465;
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
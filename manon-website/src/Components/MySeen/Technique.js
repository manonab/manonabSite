import React from 'react'
import myseenvideo01 from "../../assets/myseenvideo01.mp4";
import './MySeen.scss'
import reactNativeIcon from "../../assets/reactNativeIcon.png";
import mongodbicon from '../../assets/mongodbicon.png';
import nodejsIcon from '../../assets/nodejsIcon.svg';
import vscode from '../../assets/vscode.png';
import gitIcons from '../../assets/gitIcons.png';
import { NavLink } from "react-router-dom";

const Presentation = () => {
  return (
    <div className="componentTech">
      <h1 className="bigTitlePresentation">OUTILS</h1>
      <div className="group">
        <div className="iconsGroup">
          <span className="icons">
            <img
              src={reactNativeIcon}
              className="reactLogo"
              style={{ width: "70px" }}
              alt="reactLogo"
            />
          </span>
          <span className="icons">
            <img
              src={nodejsIcon}
              className="reactLogo"
              style={{ width: "100px" }}
              alt="node js logo"
            />
          </span>
          <span className="icons">
            <img
              src={mongodbicon}
              className="reactLogo"
              style={{ width: "100px" }}
              alt="mongodb logo"
            />
          </span>
          <span className="icons">
            <img
              src={gitIcons}
              className="reactLogo"
              style={{ width: "100px" }}
              alt="git logo"
            />
          </span>
          <span className="icons">
            <img
              src={vscode}
              className="reactLogo"
              style={{ width: "40px" }}
              alt="vscode logo"
            />
          </span>
        </div>
        <div className="videoGroup">
          <video
            src={myseenvideo01}
            className="video"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
      <h4 className="titleP">Les autres projets...</h4>
      <div className="buttonGroup">
        <NavLink to={"/projects/lanvest"}>
          <button className="buttonStack">Lanvest</button>
        </NavLink>
        <NavLink to={"/projects/geneaka"}>
          <button className="buttonStack">Geneaka</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Presentation
import React from "react";
import reactNativeIcon from "../../assets/reactNativeIcon.png";
import vscode from '../../assets/vscode.png';
import gitIcons from '../../assets/gitIcons.png';
import lanvestVideo from "../../assets/lanvestVideo.mp4"
import "../MySeen/MySeen.scss"
import { NavLink } from "react-router-dom";


const Technique = () => {
    return (
      <div className="componentTech">
        <h1 className="bigTitlePresentation">OUTILS</h1>
        <div className="group">
          <div
            className="iconsGroup"
            style={{ marginTop: "5em", marginBottom: "5em" }}
          >
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
              src={lanvestVideo}
              className="videoGeneaka"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
        <h4 className="titleP">Les autres projets...</h4>
        <div className="buttonGroup">
          <NavLink to={"/projects/geneaka"}>
            <button className="buttonStack">geneaka</button>
          </NavLink>
          <NavLink to={"/projects/myseen"}>
            <button className="buttonStack">My S.E.E.N</button>
          </NavLink>
        </div>
      </div>
    );
}

export default Technique;